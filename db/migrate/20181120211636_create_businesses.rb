class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :neighborhood
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :latitude, null: false
      t.string :longitude, null: false
      t.string :phone
      t.string :website
      t.string :price
      t.timestamps
    end

    add_index :businesses, :name
    add_index :businesses, :latitude
    add_index :businesses, :longitude
  end
end
