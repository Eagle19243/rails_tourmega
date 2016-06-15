class ChangeAttributeOnVideo < ActiveRecord::Migration
  def up
    rename_column :videos, :youtube_code, :youtube_url
  end

  def down
    rename_column :videos, :youtube_url, :youtube_code
  end
end
