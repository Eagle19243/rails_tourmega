ActiveSupport.on_load(:active_model_serializers) do
  # Preserve the old logic that will not generate the root key
  ActiveModel::Serializer.config.adapter = :json_api
end
