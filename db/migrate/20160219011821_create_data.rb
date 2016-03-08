class CreateData < ActiveRecord::Migration
  def change
    create_table :data do |t|
      t.float :temp, null: false
      t.datetime :time, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.float :humidity
      t.float :barometric_pressure
      t.float :ambient_temp

      t.timestamps null: false
    end
  end
end
