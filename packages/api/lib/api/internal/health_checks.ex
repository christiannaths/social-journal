defmodule EqualCurve.Internal.HealthChecks do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "health_checks" do

    timestamps()
  end

  @doc false
  def changeset(health_checks, attrs) do
    health_checks
    |> cast(attrs, [])
    |> validate_required([])
  end
end
