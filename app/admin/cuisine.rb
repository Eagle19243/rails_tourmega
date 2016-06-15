ActiveAdmin.register Cuisine do
  menu parent: 'Location'
  config.sort_order = 'id_asc'

  permit_params :name, :introduction, :image, :country, :country_id

  index do
    column :id
    column :name
    column :country do |country|
      country.slug
    end
    column :introduction do |country|
      truncate(country.introduction, length: 100)
    end
    actions
  end

  filter :name
  filter :country_id, as: :select, collection: Country.pluck(:name, :id), :input_html => { class: "chosen-input" }

  show do
    attributes_table do
      row :name
      row :introduction
      row :country do
        cuisine.country.slug
      end
      row :image do
        image_tag cuisine.image_url
      end
    end
  end

  form html: { multipart: true } do |f|
    semantic_errors
    inputs "Cuisine" do
      input :name
      input :introduction, as: :text
      input :image, as: :file
      input :country_id, as: :select, collection: Country.pluck(:name, :id), :input_html => { :class => "chosen-input", multiple: false }
    end
    inputs "Current Image" do
      image_tag f.object.image_url
    end
    f.actions
  end
end
