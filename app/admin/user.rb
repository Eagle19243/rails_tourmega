ActiveAdmin.register User do
  menu parent: 'User'

  controller do
    def scoped_collection
      User.includes(:primary_address)
    end

    def find_resource
      begin
        scoped_collection.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        scoped_collection.friendly.find(params[:id])
      end
    end
  end

  permit_params :email, :password, :password_confirmation, :username, :slug,
                :first_name, :last_name, :gender, :avatar, :phone,
                :primary_address, :nationality_id, :job_title, :biography,
                :date_of_birth, :hobbies, :guide_type, :verifications

  index do
    selectable_column
    column :id
    column :email
    column :name do |user|
      user.name
    end
    column :phone
    column :address do |user|
      user.primary_address.to_s
    end
    column :specialist do |user|
      user.guide_type
    end
    actions
  end

  show do
    attributes_table do
      row :email
      row :name do
        user.name
      end
      row :gender
      row :avatar do
        image_tag user.avatar_url
      end
      row :phone
      row :primary_address do
        user.primary_address.to_s
      end
      row :nationality do
        user.nationality.try(:name)
      end
      row :job_title
      row :biography do
        user.biography.try(:html_safe)
      end
      row :verifications do
        ul do
          user.verifications.each do |verification|
            li do
              verification.formated_string
            end
          end
        end
      end
      row :date_of_birth
      row :hobbies
      row :guide_type
      row :invite_code
      row :created_at
      row :updated_at
    end
  end

  filter :email
  filter :first_name
  filter :last_name
  filter :guide_type

  form html: { multipart: true } do |f|
    f.semantic_errors
    inputs "User" do
      input :email, as: :email, input_html: { autofocus: true }
      input :first_name
      input :last_name
      input :avatar
      input :gender, as: :select, collection: I18n.t('user_profile.gender').values, input_html: { class: "chosen-input" }
      input :phone
      input :nationality_id, as: :select, collection: Country.collection, input_html: { class: "chosen-input" }
      input :job_title
      input :biography, as: :ckeditor
      input :date_of_birth, as: :date_time_picker
      input :hobbies
    end

    # f.inputs "Verifications", for: [:verifications, (f.object.profile || f.object.build_profile)] do |a|
    # end
    actions
  end
end
