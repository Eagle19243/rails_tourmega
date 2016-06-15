ActiveAdmin.register Coupon do
  permit_params :code, :percentage, :value, :minimum_invoice, :expired_date, :applied_all, :applied_area

  index do
    selectable_column
    id_column
    column :code
    column :percentage
    column :value
    column :minimum_invoice
    column :expired_date
    column :applied_all
    actions
  end

  filter :code
  filter :expired_date, as: :date_time_range
  filter :applied_all

  form html: { multipart: true } do |f|
    semantic_errors
    inputs do
      input :code, input_html: { autofocus: true }
      input :percentage
      input :value
      input :minimum_invoice
      input :expired_date, as: :date_time_picker, input_html: { placeholder: 'dd/mm/yyyy' }
      input :applied_area, as: :text, input_html: { placeholder: 'Json Format', value: f.object.applied_area.present? ? f.object.applied_area.to_json : "" }
      input :applied_all, label: false, input_html: { class: 'bootstrap_checkbox' }
    end
    actions
  end
end
