ActiveAdmin.register Category do
  permit_params :name, :icon

  index do
    selectable_column
    id_column
    column :name
    column :icon do |category|
      category.icon_identifier
    end
    actions
  end

  filter :name

  show do
    attributes_table do
      row :name
      row :icon do
        image_tag category.icon_url
      end
      row :created_at
      row :updated_at
    end
  end

  form do |f|
    semantic_errors
    inputs do
      input :name, input_html: { autofocus: true }
      input :icon
    end
    actions
  end
end
