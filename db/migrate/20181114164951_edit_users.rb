class EditUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :birthdate, :date
    remove_column :users, :date
    remove_column :users, :phone_number
    add_column :users, :phone_number, :string
  end
end
