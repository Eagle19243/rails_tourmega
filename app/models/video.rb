class Video < ActiveRecord::Base
  belongs_to :tour

  validates :youtube_url, presence: true
  validates :youtube_url, format: { with: /https?:\/\/(?:www\.)?youtu(?:be\.com|\.be)/,
                          message: "Incorrect format. See <a href='https://support.google.com/youtube/answer/57741' target='_blank'>here</a> for more information" }
end
