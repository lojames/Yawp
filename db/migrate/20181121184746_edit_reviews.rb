class EditReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :date, :string, default: Time.now.strftime("%m/%d/%Y")
    add_column :reviews, :score, :integer, null: false
  end
end
