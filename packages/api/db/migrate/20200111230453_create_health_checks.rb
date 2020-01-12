class CreateHealthChecks < ActiveRecord::Migration[6.0]
  def change
    create_table :health_checks, id: :uuid, &:timestamps
  end
end
