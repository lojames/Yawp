class AddRefColToCategoriess < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :ref, :string
  end
end
