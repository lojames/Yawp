class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :business_id
    add_index :reviews, [:business_id, :user_id], unique: true
  end
end
