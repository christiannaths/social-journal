class CreateUserJournals < ActiveRecord::Migration[6.0]
  def change
    create_table :user_journals do |t|
      t.references :user
      t.references :journal

      t.timestamps
    end
  end
end
