class ImageSizeValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    unless value.blank?
      image = MiniMagick::Image.open(value.path)
      checks = [
        { :option => :width,
          :field => :width,
          :function => :'==',
          :message =>"Image width must be %d px."},
        { :option => :height,
          :field => :height,
          :function => :'==',
          :message =>"Image height must be %d px."},
        { :option => :max_width,
          :field => :width,
          :function => :'<=',
          :message =>"Image width must be at most %d px."},
        { :option => :max_height,
          :field => :height,
          :function => :'<=',
          :message =>"Image height must be at most %d px."},
        { :option => :min_width,
          :field => :width,
          :function => :'>=',
          :message =>"Image width must be at least %d px."},
        { :option => :min_height,
          :field => :height,
          :function => :'>=',
          :message =>"Image height must be at least %d px."},
      ]

      checks.each do |p|
        if options.has_key?(p[:option]) and
          !image[p[:field]].send(p[:function], options[p[:option]])
          record.errors[attribute] << p[:message] % options[p[:option]]
        end
      end
    end
  end
end