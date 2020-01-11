defmodule EqualCurve.Repo.Migrations.CreateHealthChecks do
  use Ecto.Migration

  def change do
    create table(:health_checks, primary_key: false) do
      add :id, :binary_id, primary_key: true

      timestamps()
    end

  end
end
