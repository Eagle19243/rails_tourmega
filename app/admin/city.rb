ActiveAdmin.register City do
  menu parent: 'Location'
  controller do
    def update
      resource.update_attributes(scene_images: params[:city][:scene_images]) if params[:city][:scene_images]
      super
    end

    def scoped_collection
      City.includes(:country)
    end

    def find_resource
      scoped_collection.friendly.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      scoped_collection.find_by(id: params[:id])
    end
  end

  permit_params :name, :code, :slug, :is_searching_active, :scene_images, :description, :postcode, :country_id, :country, :popular

  index do
    column :id
    column :postcode
    column :slug do |city|
      "#{city.slug} | #{city.name} | #{city.postcode}"
    end
    column :description do |city|
      truncate(city.description, length: 100)
    end
    column :is_searching_active
    column :country do |city|
      city.country.slug
    end
    actions
  end

  filter :slug
  filter :postcode
  filter :is_searching_active
  filter :country_id, as: :select, collection: Country.collection, :input_html => { :class => "chosen-input", multiple: false }

  show do
    attributes_table do
      row :name do
        "#{city.slug} | #{city.name} | #{city.postcode}"
      end
      row :description
      row :country do
        city.country.slug
      end
      row :is_searching_active do
        city.is_searching_active? ? "Yes" : "No"
      end
      row :scene_images, class: 'images' do
        ul do
          if city.scene_images.present?
            city.scene_images.each do |image|
              li do
                image_tag image.url, width: '150', height: '150'
              end
            end
          else
            li do
              "No images yet"
            end
          end
        end
      end
    end
  end

  form html: { multipart: true } do |f|
    semantic_errors
    inputs "City" do
      input :name
      input :is_searching_active
      input :country_id, as: :select, collection: Country.collection, :input_html => { :class => "chosen-input", multiple: false }
      input :description
      input :scene_images, as: :file, input_html: { multiple: true }
    end
    inputs "Current Scene Images" do
      ul(class: 'images') do
        f.object.scene_images.each do |image|
          li do
            image_tag image.url, width: '150', height: '150'
          end
        end
      end
    end
    f.actions
  end
end
