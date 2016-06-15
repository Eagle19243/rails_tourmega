ActiveAdmin.register Location do
  menu parent: 'Location'
  permit_params :name, :address, :latitude, :longitude, :type, :google_place_id, :slug, :city_id, :country_id, :street_number, :route, :locality, :administrative_area_level_1, :country, :postal_code

  index do
    selectable_column
    id_column
    column :slug
    column :address do |location|
      location.full_address
    end
   actions
  end

  filter :persisted_city, as: :select, collection: City.collection, input_html: { :class => "chosen-input", multiple: false }
  filter :persisted_country, as: :select, collection: Country.collection, input_html: { class: "chosen-input", multiple: false }

  form html: { multipart: true } do |f|
    semantic_errors
    inputs do
      input :name, input_html: { autofocus: true }
      input :city_id, as: :select, collection: City.collection, input_html: { :class => "chosen-input", multiple: false }
      input :country_id, as: :select, collection: Country.collection, input_html: { class: 'chosen-input', multiple: false}
      input :latitude
      input :longitude
    end
    actions
  end
end
