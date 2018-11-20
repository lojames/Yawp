class EditBusinessCategoriesAgain < ActiveRecord::Migration[5.2]
  def change
    change_column :business_categories, :business_id, :integer, null: false
    change_column :business_categories, :category_id, :integer, null: false
  end
end
