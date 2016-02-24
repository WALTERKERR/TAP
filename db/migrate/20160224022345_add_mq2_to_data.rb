class AddMq2ToData < ActiveRecord::Migration
  def change
    add_column :data, :mq2, :float
  end
end
