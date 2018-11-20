# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_20_220032) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_categories", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "category_id", null: false
    t.index ["business_id", "category_id"], name: "index_business_categories_on_business_id_and_category_id", unique: true
    t.index ["business_id"], name: "index_business_categories_on_business_id"
    t.index ["category_id"], name: "index_business_categories_on_category_id"
  end

  create_table "business_hours", force: :cascade do |t|
    t.integer "business_id", null: false
    t.string "day", null: false
    t.string "hours", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_business_hours_on_business_id"
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "neighborhood"
    t.string "street_address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "latitude", null: false
    t.string "longitude", null: false
    t.string "phone"
    t.string "website"
    t.string "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["latitude"], name: "index_businesses_on_latitude"
    t.index ["longitude"], name: "index_businesses_on_longitude"
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_categories_on_name", unique: true
  end

  create_table "images", force: :cascade do |t|
    t.string "image_url", null: false
    t.string "comment"
    t.string "imageable_type", null: false
    t.string "imageable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["imageable_type", "imageable_id"], name: "index_images_on_imageable_type_and_imageable_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id", "user_id"], name: "index_reviews_on_business_id_and_user_id", unique: true
    t.index ["business_id"], name: "index_reviews_on_business_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "zip_code", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "birthdate"
    t.string "phone_number"
    t.string "gender"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
