class TourSearchResultSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :price,
             :duration_in_minutes,
             :min_quantity,
             :max_quantity,
             :visible,
             :slug,
             :price_type,
             :user_id,
             :category_ids,
             :location,
             :pickup_location,
             :languages,
             :created_at,
             :updated_at
end
