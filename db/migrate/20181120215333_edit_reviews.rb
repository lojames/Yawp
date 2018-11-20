class EditReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :body, :string, null: false
    add_column :reviews, :user_id, :integer, null: false
    add_column :reviews, :business_id, :integer, null: false
    add_timestamps :reviews

    add_index :reviews, :user_id
    add_index :reviews, :business_id
    add_index :reviews, [:business_id, :user_id], unique: true
  end
end
