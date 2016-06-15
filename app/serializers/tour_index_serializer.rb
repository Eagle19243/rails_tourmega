class TourIndexSerializer < ActiveModel::Serializer
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

  def location
    object.location.as_json(only: [:address], methods: [:lat_lng])
  end

  def pickup_location
    object.pickup_address.as_json(only: [:address], methods: [:lat_lng])
  end

  def category_ids
    object.category_ids.as_json
  end

  def created_at
    object.created_at.to_s(:dmy)
  end

  def updated_at
    object.updated_at.to_s(:dmy)
  end
end
