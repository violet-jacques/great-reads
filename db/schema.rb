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

ActiveRecord::Schema.define(version: 20181217002910) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "author_books", force: :cascade do |t|
    t.bigint "author_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_author_books_on_author_id"
    t.index ["book_id", "author_id"], name: "index_author_books_on_book_id_and_author_id"
    t.index ["book_id"], name: "index_author_books_on_book_id"
  end

  create_table "authors", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.date "born_at", null: false
    t.date "died_at"
    t.string "birth_place", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["born_at"], name: "index_authors_on_born_at"
    t.index ["died_at"], name: "index_authors_on_died_at"
    t.index ["first_name"], name: "index_authors_on_first_name"
    t.index ["last_name"], name: "index_authors_on_last_name"
  end

  create_table "books", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
  end

  create_table "genre_categorizations", force: :cascade do |t|
    t.bigint "book_id", null: false
    t.bigint "genre_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id", "genre_id"], name: "index_genre_categorizations_on_book_id_and_genre_id"
    t.index ["book_id"], name: "index_genre_categorizations_on_book_id"
    t.index ["genre_id"], name: "index_genre_categorizations_on_genre_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.index ["name"], name: "index_genres_on_name", unique: true
  end

  create_table "influences", force: :cascade do |t|
    t.bigint "influencer_id", null: false
    t.bigint "influencee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["influencee_id"], name: "index_influences_on_influencee_id"
    t.index ["influencer_id", "influencee_id"], name: "index_influences_on_influencer_id_and_influencee_id"
    t.index ["influencer_id"], name: "index_influences_on_influencer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "variants", force: :cascade do |t|
    t.date "published_at", null: false
    t.string "published_by", null: false
    t.string "isbn", null: false
    t.string "language", null: false
    t.integer "format", null: false
    t.integer "pages", null: false
    t.bigint "book_id", null: false
    t.index ["book_id"], name: "index_variants_on_book_id"
    t.index ["format"], name: "index_variants_on_format"
    t.index ["isbn"], name: "index_variants_on_isbn", unique: true
    t.index ["language"], name: "index_variants_on_language"
    t.index ["pages"], name: "index_variants_on_pages"
    t.index ["published_at"], name: "index_variants_on_published_at"
    t.index ["published_by"], name: "index_variants_on_published_by"
  end

end
