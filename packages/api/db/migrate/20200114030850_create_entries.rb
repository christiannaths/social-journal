class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.references :journal, null: false, foreign_key: true
      t.string :title
      t.text :body
      t.datetime :published_at

      t.timestamps
    end
  end
end
