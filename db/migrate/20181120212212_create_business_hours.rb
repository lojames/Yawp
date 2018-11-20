class CreateBusinessHours < ActiveRecord::Migration[5.2]
  def change
    create_table :business_hours do |t|
      t.integer :business_id, null: false, foreign_key: true
      t.string :day, null: false
      t.string :hours, null: false
      t.timestamps
      end

    add_index :business_hours, :business_id
    
  end
end
