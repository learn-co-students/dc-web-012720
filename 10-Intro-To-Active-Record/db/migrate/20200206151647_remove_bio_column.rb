class RemoveBioColumn < ActiveRecord::Migration[6.0]
  def change
    #my current verion of users table has 3 columns
    remove_column :users, :bio, :text
  end
end
