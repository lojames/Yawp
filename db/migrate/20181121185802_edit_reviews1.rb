class EditReviews1 < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :date
    add_column :reviews, :date, :string
  end
end
