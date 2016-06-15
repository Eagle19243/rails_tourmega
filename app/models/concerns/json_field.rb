module JsonField
  extend ActiveSupport::Concern

  def update_json_field
    self.class.columns_hash.each do |column_name, value|
      if value.type == :json
        pre_value = self.send(column_name)
        self.send("#{column_name}=", eval(pre_value)) if pre_value.class == String
      end
    end
  end
end
