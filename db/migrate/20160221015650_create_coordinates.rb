class CreateCoordinates < ActiveRecord::Migration
  def change
    create_table :coordinates do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.timestamps null: false
    end
  end
end
