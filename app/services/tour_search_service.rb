class TourSearchService
  MAX_NO_OF_RECORDS = 40

  attr_reader :params

  def initialize(params)
    @params = params
  end

  def search
    Tour.__elasticsearch__
        .search(
          size: MAX_NO_OF_RECORDS,
          query: query,
          sort: build_sort_options
        )
  end

  private

  def query
    {
      filtered: {
        query: build_query,
        filter: build_filters
      }
    }
  end

  def build_query
    query_string = params[:query].to_s
    if query_string.empty?
      { match_all: {} }
    else
      {
        multi_match: {
          query: query_string,
          fields: ['name'] #TODO: ADD MORE QUERY FIELDS HERE
        }
      }
    end
  end

  def build_filters
    filters = []
    filters << visible_filter
    filters << build_coords_filter if params[:coords].present?
    filters << build_categories_filter if params[:categories].present?
    filters << build_price_range_filter if params[:price_range].present?

    excludes = []

    { bool: { must: filters, must_not: excludes }}
  end

  def build_sort_options
    if params[:sort_by].present?
      sort_by = []
      sort_by << { "price" => "asc" } if params[:sort_by] == 'price_asc'
      sort_by << { "price" => "desc" } if params[:sort_by] == 'price_desc'
      sort_by << "_score"
    else
      ["_score"]
    end
  end

  def visible_filter
    {
      'term': {
        'visible': true
      }
    }
  end

  def build_categories_filter
    {
      'terms': {
        'category_ids': params[:categories].map(&:to_i)
      }
    }
  end

  def build_price_range_filter
    {
      'range': {
        'price': {
          'gte' => params[:price_range][:from],
          'lte' => params[:price_range][:to]
        }
      }
    }
  end

  def build_coords_filter
    coords = normalize_coords(params[:coords])
    {
      'geo_bounding_box': {
        'type' => 'indexed',
        'location.lat_lng' => {
          'top_left' => coords['top_left'],
          'bottom_right' => coords['bottom_right']
        }
      }
    }
  end

  def normalize_coords(coords)
    {
      'top_left' => {
        'lat' => coords['top_left']['lat'].to_f,
        'lon' => coords['top_left']['lon'].to_f
      },
      'bottom_right' => {
        'lat' => coords['bottom_right']['lat'].to_f,
        'lon' => coords['bottom_right']['lon'].to_f
      }
    }
  end
end