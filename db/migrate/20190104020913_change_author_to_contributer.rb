class ChangeAuthorToContributer < ActiveRecord::Migration[5.1]
  def change
    rename_table :authors, :contributors
  end
end
