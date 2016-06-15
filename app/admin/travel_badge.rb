ActiveAdmin.register TravelBadge do
  permit_params :title, :image, :description, :requirements

  index do
    selectable_column
    id_column
    column :title
    column :image do |badge|
      badge.image_identifier
    end
    column :description do |badge|
      truncate(badge.description.html_safe, length: 100, escape: false)
    end
    column :requirements do |badge|
      truncate(badge.requirements.html_safe, length: 100, escape: false)
    end
    actions
  end

  filter :title

  show do
    attributes_table do
      row :title
      row :image do
        image_tag travel_badge.image.url
      end
      row :description do
        travel_badge.description.html_safe
      end
      row :requirements do
        travel_badge.requirements.html_safe
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { multipart: true } do |f|
    semantic_errors
    inputs do
      input :title
      input :image, as: :file
      input :description, as: :ckeditor
      input :requirements, as: :ckeditor
    end
    actions
  end
end
