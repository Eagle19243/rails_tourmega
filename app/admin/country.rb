ActiveAdmin.register Country do
  menu parent: 'Location'
  config.sort_order = 'id_asc'
  controller do
    def update
      resource.update_attributes(scene_images: params[:country][:scene_images]) if params[:country][:scene_images]
      super
    end

    def find_resource
      scoped_collection.friendly.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      scoped_collection.find_by(id: params[:id])
    end
  end

  permit_params :name, :code, :slug, :is_searching_active, :scene_images, :introduction

  index do
    column :id
    column :code
    column :slug
    column :introduction do |country|
      truncate(country.introduction, length: 100)
    end
    column :is_searching_active
    actions
  end

  filter :slug
  filter :code
  filter :is_searching_active

  show do
    attributes_table do
      row :name do
        "#{country.code} | #{country.slug} | #{country.name}"
      end
      row :introduction
      row :is_searching_active do
        country.is_searching_active? ? "Yes" : "No"
      end
      row :scene_images, class: 'images' do
        ul do
          if country.scene_images.present?
            country.scene_images.each do |image|
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
    inputs "Country" do
      input :name
      input :is_searching_active
      input :introduction
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
