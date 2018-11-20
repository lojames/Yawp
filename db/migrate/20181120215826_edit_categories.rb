class EditCategories < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :name, :string, null: false
    add_timestamps :categories
    add_index :categories, :name, unique: true
  end
end
