class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :image_url, null: false
      t.string :comment
      t.string :imageable_type, null: false
      t.string :imageable_id, null: false
      t.timestamps
    end

    add_index :images, [:imageable_type, :imageable_id]
  end
end
