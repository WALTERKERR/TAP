class CreateData < ActiveRecord::Migration
  def change
    create_table :data do |t|
      t.float :latitude
      t.float :longitude
      t.float :temp
      t.datetime :time
      t.string :zip
      t.string :city
      t.string :state

      t.timestamps null: false
    end
  end
end
