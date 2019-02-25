class ChangeBusinessLatLonNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column :businesses, :latitude, :float, null: false
    change_column :businesses, :longitude, :float, null: false
  end
end
