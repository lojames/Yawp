class CreateBusinessCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :business_categories do |t|
      t.integer :business_id, null: true
      t.integer :category_id, null: true
    end

    add_index :business_categories, :business_id
    add_index :business_categories, :category_id
    add_index :business_categories, [:business_id, :category_id], unique: true
  end
end
