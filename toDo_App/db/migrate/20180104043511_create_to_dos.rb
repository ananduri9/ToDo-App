class CreateToDos < ActiveRecord::Migration[5.1]
  def change
    create_table :to_dos do |t|
      t.text :message
      t.date :deadline

      t.timestamps
    end
  end
end
