# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160602154506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.integer  "author_id"
    t.string   "author_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "active_admin_comments", ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
  add_index "active_admin_comments", ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
  add_index "active_admin_comments", ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "admin_users", ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
  add_index "admin_users", ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree

  create_table "bank_accounts", force: :cascade do |t|
    t.string   "country"
    t.string   "name"
    t.string   "address"
    t.string   "bank_type"
    t.string   "routing_number"
    t.string   "account_number"
    t.string   "swift_code"
    t.integer  "user_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "booking_references", force: :cascade do |t|
    t.integer  "tour_id"
    t.integer  "user_id"
    t.string   "referral_code"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.string   "icon"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "description"
    t.string   "symbol"
  end

  create_table "categories_tours", force: :cascade do |t|
    t.integer  "category_id"
    t.integer  "tour_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "categories_tours", ["category_id"], name: "index_categories_tours_on_category_id", using: :btree
  add_index "categories_tours", ["tour_id"], name: "index_categories_tours_on_tour_id", using: :btree

  create_table "cities", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "postcode"
    t.string   "code"
    t.integer  "country_id"
    t.datetime "created_at",                                                   null: false
    t.datetime "updated_at",                                                   null: false
    t.boolean  "is_searching_active",                          default: false
    t.json     "scene_images"
    t.boolean  "popular",                                      default: true
    t.string   "slug"
    t.decimal  "ne_lat",              precision: 10, scale: 6
    t.decimal  "ne_lng",              precision: 10, scale: 6
    t.decimal  "sw_lat",              precision: 10, scale: 6
    t.decimal  "sw_lng",              precision: 10, scale: 6
  end

  add_index "cities", ["country_id"], name: "index_cities_on_country_id", using: :btree

  create_table "contact_messages", force: :cascade do |t|
    t.string   "email"
    t.text     "message"
    t.integer  "reservation_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string   "email"
    t.string   "name"
    t.integer  "subject"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "countries", force: :cascade do |t|
    t.string   "name"
    t.string   "code"
    t.string   "slug"
    t.datetime "created_at",                                                   null: false
    t.datetime "updated_at",                                                   null: false
    t.boolean  "is_searching_active",                          default: false
    t.json     "scene_images"
    t.text     "introduction",                                 default: ""
    t.decimal  "lng",                 precision: 10, scale: 6
    t.decimal  "lat",                 precision: 10, scale: 6
    t.decimal  "ne_lat",              precision: 10, scale: 6
    t.decimal  "ne_lng",              precision: 10, scale: 6
    t.decimal  "sw_lat",              precision: 10, scale: 6
    t.decimal  "sw_lng",              precision: 10, scale: 6
  end

  add_index "countries", ["code"], name: "index_countries_on_code", unique: true, using: :btree
  add_index "countries", ["slug"], name: "index_countries_on_slug", unique: true, using: :btree

  create_table "coupons", force: :cascade do |t|
    t.string   "code"
    t.date     "expired_date"
    t.decimal  "percentage"
    t.decimal  "value"
    t.decimal  "minimum_invoice"
    t.boolean  "applied_all"
    t.json     "applied_area"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "cuisines", force: :cascade do |t|
    t.integer  "country_id"
    t.string   "name"
    t.string   "image"
    t.string   "introduction"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "hosts", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "skype_id"
    t.text     "traveller_background"
    t.text     "experience_background"
    t.text     "reason"
    t.string   "certificates"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "location_reviews", force: :cascade do |t|
    t.integer  "location_id"
    t.integer  "user_id"
    t.text     "review"
    t.decimal  "rating"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string   "name"
    t.decimal  "latitude",                    precision: 10, scale: 6
    t.decimal  "longitude",                   precision: 10, scale: 6
    t.string   "type"
    t.string   "google_place_id"
    t.string   "slug"
    t.datetime "created_at",                                           null: false
    t.datetime "updated_at",                                           null: false
    t.integer  "city_id"
    t.integer  "country_id"
    t.string   "street_number"
    t.string   "route"
    t.string   "locality"
    t.string   "administrative_area_level_1"
    t.string   "country"
    t.string   "postal_code"
    t.string   "address"
  end

  add_index "locations", ["slug"], name: "index_locations_on_slug", unique: true, using: :btree

  create_table "messages", force: :cascade do |t|
    t.integer  "sender_id"
    t.integer  "receiver_id"
    t.string   "title"
    t.text     "content"
    t.boolean  "skip_email"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "seen",        default: false
  end

  create_table "payment_cards", force: :cascade do |t|
    t.string   "name_on_card"
    t.string   "number"
    t.string   "month"
    t.string   "year"
    t.string   "billing_address"
    t.string   "city"
    t.string   "post_code"
    t.string   "state"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "redactor_assets", force: :cascade do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "redactor_assets", ["assetable_type", "assetable_id"], name: "idx_redactor_assetable", using: :btree
  add_index "redactor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_redactor_assetable_type", using: :btree

  create_table "reservations", force: :cascade do |t|
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.datetime "start_at"
    t.integer  "user_id"
    t.integer  "number_of_passengers",    default: 1
    t.integer  "tour_id"
    t.string   "code"
    t.integer  "payment_card_id"
    t.integer  "coupon_id"
    t.integer  "booking_reference_id"
    t.text     "additional_request"
    t.datetime "completed_at"
    t.string   "status"
    t.text     "guest_information"
    t.text     "guest_travel_background"
    t.text     "external_guests",         default: [],              array: true
  end

  add_index "reservations", ["tour_id"], name: "index_reservations_on_tour_id", using: :btree
  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree

  create_table "slides", force: :cascade do |t|
    t.string   "caption"
    t.string   "location"
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subscribers", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.boolean  "active",     default: true
  end

  create_table "tour_images", force: :cascade do |t|
    t.string   "name"
    t.integer  "tour_id"
    t.boolean  "is_thumbnail"
    t.string   "file"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "tour_images", ["tour_id"], name: "index_tour_images_on_tour_id", using: :btree

  create_table "tour_imports", force: :cascade do |t|
    t.integer  "tour_id"
    t.integer  "service_id"
    t.integer  "service_tour_id"
    t.string   "url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "tour_imports", ["service_id", "service_tour_id"], name: "index_tour_imports_on_service_id_and_service_tour_id", unique: true, using: :btree
  add_index "tour_imports", ["tour_id"], name: "index_tour_imports_on_tour_id", using: :btree

  create_table "tour_reviews", force: :cascade do |t|
    t.integer  "tour_id"
    t.integer  "user_id"
    t.string   "comment"
    t.decimal  "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tours", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.text     "overview"
    t.decimal  "price",                default: 0.0
    t.integer  "user_id"
    t.integer  "location_id"
    t.integer  "duration_in_minutes"
    t.integer  "pickup_address_id"
    t.integer  "min_quantity"
    t.integer  "max_quantity"
    t.boolean  "visible",              default: false
    t.string   "status"
    t.string   "slug"
    t.boolean  "instant_booking"
    t.integer  "price_type",           default: 0,     null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.json     "images"
    t.text     "offerings",            default: ""
    t.text     "languages",            default: [],                 array: true
    t.string   "flexible_price"
    t.text     "flexible_requirement"
    t.string   "thumbnail_image"
    t.boolean  "featured",             default: false
    t.string   "title"
    t.text     "transportations",      default: [],                 array: true
    t.integer  "cancellation",         default: 0,     null: false
    t.text     "emotions",             default: [],                 array: true
    t.time     "start_time"
  end

  add_index "tours", ["location_id"], name: "index_tours_on_location_id", using: :btree
  add_index "tours", ["slug"], name: "index_tours_on_slug", unique: true, using: :btree
  add_index "tours", ["status"], name: "index_tours_on_status", using: :btree
  add_index "tours", ["user_id"], name: "index_tours_on_user_id", using: :btree

  create_table "travel_badges", force: :cascade do |t|
    t.string   "title"
    t.string   "image"
    t.text     "description"
    t.text     "requirements"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "travel_badges_users", force: :cascade do |t|
    t.integer  "travel_badge_id"
    t.string   "user_id"
    t.string   "integer"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "uploads", force: :cascade do |t|
    t.string   "title"
    t.integer  "uploadable_id"
    t.string   "uploadable_type"
    t.string   "uploaded_in"
    t.integer  "user_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                                           default: "", null: false
    t.string   "encrypted_password",                              default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                                   default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",                                 default: 0,  null: false
    t.datetime "locked_at"
    t.string   "username"
    t.string   "slug"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "provider"
    t.string   "uid"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "avatar"
    t.string   "gender"
    t.string   "phone_number"
    t.integer  "primary_address_id"
    t.integer  "nationality_id"
    t.string   "job_title"
    t.text     "biography"
    t.date     "date_of_birth"
    t.string   "hobbies"
    t.integer  "guide_type"
    t.string   "invite_code"
    t.decimal  "credits",                precision: 10, scale: 2
    t.text     "languages",                                       default: [],              array: true
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["provider", "uid"], name: "index_users_on_provider_and_uid", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  create_table "verifications", force: :cascade do |t|
    t.string   "source"
    t.string   "message"
    t.string   "account"
    t.boolean  "verified"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "videos", force: :cascade do |t|
    t.string   "youtube_url"
    t.integer  "duration"
    t.integer  "tour_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "videos", ["tour_id"], name: "index_videos_on_tour_id", using: :btree

  add_foreign_key "tour_imports", "tours"
end
