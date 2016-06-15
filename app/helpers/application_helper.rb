module ApplicationHelper
  FOOTER_AT_PAGES = %w(home countries cities tours)
  NOT_COPYRIGHT_AT_PAGES = %w(search)
  HELPER_TOOLBOX_VISIBLE = true

  def google_map_uri(key = Figaro.env.google_map_api)
    if Rails.env.production?
      "//maps.googleapis.com/maps/api/js?key=#{key}&libraries=geometry,places&sensor=false"
    else
      "//maps.googleapis.com/maps/api/js?libraries=geometry,places"
    end
  end

  def include_gmap(callback, key = Figaro.env.google_map_api)
    if Rails.env.production?
      javascript_include_tag "//maps.googleapis.com/maps/api/js?key=#{key}&libraries=geometry,places&sensor=false&callback=#{callback}", async: '', defer: ''
    else
      javascript_include_tag "//maps.googleapis.com/maps/api/js?libraries=geometry,places&callback=#{callback}", async: '', defer: ''
    end
  end

  def include_gmap_not_async(callback, key = Figaro.env.google_map_api)
    if Rails.env.production?
      javascript_include_tag "//maps.googleapis.com/maps/api/js?key=#{key}&sensor=false&callback=#{callback}"
    else
      javascript_include_tag "//maps.googleapis.com/maps/api/js?libraries=geometry,places&callback=#{callback}"
    end
  end

  def show_map_helper(model, opts={})
    object = model
    model_name = model.class.to_s.downcase
    location = object.location
    latitude = location.latitude
    longitude = location.longitude

    opts = { allow: 'show', searchbox: 'show', width: '800px', height: '400px', latitude: "#{latitude}", longitude: "#{longitude}", address: "", zoom: 13, style: "border: 1px solid #green;", searchbox_width: '400px' }.merge(opts)
    [
      content_tag(:div, :id => "geopoint_search_box_container", style: " display: #{opts[:searchbox]}") do
        tag(:input, type: :text, placeholder: 'Search', id: "gmaps_#{model_name}_search_box", style: "width: #{opts[:searchbox_width]};")
      end,
      content_tag(:div, '', id: "map_canvas", style: "width: #{opts[:width]}; height: #{opts[:height]}; #{opts[:style]}"),
      content_tag(:div, '', class: "data-location", data: {model: model_name, address:opts[:address], latitude: opts[:latitude] , longitude: opts[:longitude], zoom: opts[:zoom]}),
      tag(:input, type: :hidden, value: "#{opts[:allow]}", name: "allow", id: "gmaps_map_allow"),
      tag(:input, type: :hidden, value: "#{latitude}", name: "#{model_name}[latitude]", id: "gmaps_location_latitude"),
      tag(:input, type: :hidden, value: "#{longitude}", name: "#{model_name}[longitude]", id: "gmaps_location_longitude"),
      tag(:input, type: :hidden, value: "", name: "#{model_name}[address]", id: "gmaps_location_address"),
      javascript_tag("window.initJsMap();")
    ].join.html_safe
  end

  def twitterized_type(type)
    case type.to_sym
      when :alert
        "alert alert-warning"
      when :error
        "alert alert-danger"
      when :notice
        "alert alert-success"
      else
        "alert alert-info"
    end
  end

  def display_footer?
    FOOTER_AT_PAGES.include?(controller_name)
  end

  def nondisplay_copyright?
    NOT_COPYRIGHT_AT_PAGES.include?(controller_name)
  end

  def google_analytics_script
    "<script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-48672035-2', 'auto');
      ga('send', 'pageview');

    </script>".html_safe
  end

  def helper_toolbox_visible?
    HELPER_TOOLBOX_VISIBLE
  end

  def display_become_guide_navigation?
    !user_signed_in? || (user_signed_in? && current_user.not.is_a_host?)
  end

  def display_craft_your_navigation?
    !(controller_name == 'tours' && action_name == 'new')
  end

  def display_help_navigation?
    false
  end

  [:home, :search, :tours, :users].each do |name|
    define_method "#{name}_controller?" do
      controller_name == name.to_s
    end
  end

  def overlay_header_display?
    home_controller?
  end
end
