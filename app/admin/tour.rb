ActiveAdmin.register Tour do
  menu parent: 'Tour'

  controller do
    def update
      resource.update_attributes(images: params[:tour][:images]) if params[:tour][:images]
      super
    end

    def find_resource
      Tour.friendly.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      Tour.find_by(id: params[:id])
    end
  end

  permit_params :location_id, :pickup_address_id, :creator_id, :name, :overview, :description, :price,
                :flexible_price, :flexible_requirement,
                :duration_in_minutes,:min_quantity, :max_quantity, :visible,
                :user_id, :status, :instant_booking, :price_type,
                :images, :thumbnail_image, :offerings, :languages, category_ids: []

  index do
    selectable_column
    column :id
    column :name
    column :creator do |tour|
      tour.creator_name
    end
    column :price do |tour|
      price_type =  case tour.price_type.to_s
                    when 'price_per_person'
                      "per person"
                    when 'fixed_price'
                      "in total"
                    end
      "#{tour.price} #{price_type}"
    end
    column :quantity do |tour|
      "#{tour.min_quantity} - #{tour.max_quantity}"
    end
    column :images do |tour|
      tour.images.size
    end
    column :visible
    column :featured
    actions
  end

  filter :id, label: 'Name', as: :select, collection: Tour.pluck(:name, :id), :input_html => { :class => "chosen-input", multiple: false }
  filter :user_id, label: 'Creator', as: :select, collection: User.collection, :input_html => { :class => "chosen-input", multiple: false }
  filter :visible
  filter :featured

  show do
    attributes_table do
      row :id
      row :name
      row :visible
      row :featured
      row :instant_booking
      row :duration do
        "#{tour.duration_in_minutes} minutes"
      end
      row :location
      row :pickup_address
      row :languages
      row :categories do
        ul(class: 'images') do
          if tour.categories.present?
            tour.categories.each do |category|
              li do
                image_tag category.icon_url
              end
            end
          end
        end
      end
      row :thumbnail_image do
        image_tag tour.thumbnail_image.url, width: '300', height: '200' if tour.thumbnail_image.present?
      end
      row :images do
        render 'tour_images', tour: tour
      end
      row :creator do
        tour.creator_name
      end
      row :description do
        tour.description.try(:html_safe)
      end
      row :overview do
        tour.overview.try(:html_safe)
      end
      row 'price($)' do
        price_type =  case tour.price_type.to_s
                      when 'price_per_person'
                        "per person"
                      when 'fixed_price'
                        "in total"
                      end
        "#{tour.price} #{price_type}"
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { multipart: true } do |f|
    semantic_errors
    inputs do
      input :name
      input :visible, label: 'Mark visible'
      input :instant_booking, label: 'Mark instant booking allow', checked: true
      input :overview, as: :ckeditor
      input :description, as: :ckeditor
      input :languages, as: :select, collection: Tour::LANGUAGES, :input_html => { :class => "chosen-input", multiple: true, 'data-placeholder' => "Choose a languages..." }
      input :offerings, as: :ckeditor
      input :price, input_html: { style: 'width: 50px;' }
      input :price_type, as: :select, collection: Tour::PRICE_TYPE.map{|e| [e.to_s.humanize, e]}, :checked => ['Fixed price', :fixed_price], input_html: { class: 'chosen-input' }
      input :duration_in_minutes, input_html: { style: 'width: 50px;' }
      input :category_ids, as: :select, collection: Category.pluck(:name, :id), :input_html => { :class => "chosen-input", multiple: true }
      input :min_quantity, input_html: { style: 'width: 50px;' }
      input :max_quantity, input_html: { style: 'width: 50px;' }
      f.input :location_id, as: :select, collection: Location.pluck(:name, :id), :input_html => { :class => "chosen-input", multiple: false }
      f.input :pickup_address_id, as: :select, collection: Location.pluck(:name, :id), :input_html => { :class => "chosen-input", multiple: false }
      input :user_id, as: :select, collection: User.collection, :input_html => { :class => "chosen-input", multiple: false }, label: 'Creator'
      input :thumbnail_image, as: :file
      input :images, as: :file, input_html: { multiple: true }
    end

    inputs "Current thumbnail Image" do
      ul(class: 'images') do
        li do
          image_tag(f.object.thumbnail_image_url, width: '150', height: '150') if f.object.thumbnail_image.present?
        end
      end
    end

    inputs "Current Images" do
      ul(class: 'images') do
        f.object.images.each do |image|
          li do
            image_tag image.url, width: '150', height: '150'
          end
        end
      end
    end
    f.actions
  end
end
