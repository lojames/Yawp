class EditImages < ActiveRecord::Migration[5.2]
  def change
    remove_index :images, [:imageable_type, :imageable_id]
    remove_column :images, :imageable_id
    remove_column :images, :imageable_type

    add_column :images, :user_id, :integer, null: false
    add_column :images, :business_id, :integer, null: false
    add_column :images, :review_id, :integer

    add_index :images, :user_id
    add_index :images, :business_id
    add_index :images, :review_id
  end
end
