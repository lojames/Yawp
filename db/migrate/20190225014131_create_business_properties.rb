class CreateBusinessProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :business_properties do |t|
      t.integer :business_id, null: false
      t.integer :property_id, null: false
    end

    add_index :business_properties, :business_id
    add_index :business_properties, :property_id
    add_index :business_properties, [:business_id, :property_id], unique: true
  end
end
