class CreateProperties < ActiveRecord::Migration[5.2]
  def change
    create_table :properties do |t|
      t.string :key, null: false
      t.string :value, null: false
      t.timestamps
    end

    add_index :properties, [:key, :value], unique: true
  end
end
