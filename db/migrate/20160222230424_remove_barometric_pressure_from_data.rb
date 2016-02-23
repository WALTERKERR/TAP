class RemoveBarometricPressureFromData < ActiveRecord::Migration
  def change
    remove_column :data, :barometric_pressure, :float
  end
end
