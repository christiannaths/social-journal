defmodule EqualCurve.Internal do
  @moduledoc """
  The Internal context.
  """

  import Ecto.Query, warn: false
  alias EqualCurve.Repo

  alias EqualCurve.Internal.HealthChecks

  @doc """
  Returns the list of health_checks.

  ## Examples

      iex> list_health_checks()
      [%HealthChecks{}, ...]

  """
  def list_health_checks do
    Repo.all(HealthChecks)
  end

  @doc """
  Gets a single health_checks.

  Raises `Ecto.NoResultsError` if the Health checks does not exist.

  ## Examples

      iex> get_health_checks!(123)
      %HealthChecks{}

      iex> get_health_checks!(456)
      ** (Ecto.NoResultsError)

  """
  def get_health_checks!(id), do: Repo.get!(HealthChecks, id)

  @doc """
  Creates a health_checks.

  ## Examples

      iex> create_health_checks(%{field: value})
      {:ok, %HealthChecks{}}

      iex> create_health_checks(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_health_checks(attrs \\ %{}) do
    %HealthChecks{}
    |> HealthChecks.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a health_checks.

  ## Examples

      iex> update_health_checks(health_checks, %{field: new_value})
      {:ok, %HealthChecks{}}

      iex> update_health_checks(health_checks, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_health_checks(%HealthChecks{} = health_checks, attrs) do
    health_checks
    |> HealthChecks.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a HealthChecks.

  ## Examples

      iex> delete_health_checks(health_checks)
      {:ok, %HealthChecks{}}

      iex> delete_health_checks(health_checks)
      {:error, %Ecto.Changeset{}}

  """
  def delete_health_checks(%HealthChecks{} = health_checks) do
    Repo.delete(health_checks)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking health_checks changes.

  ## Examples

      iex> change_health_checks(health_checks)
      %Ecto.Changeset{source: %HealthChecks{}}

  """
  def change_health_checks(%HealthChecks{} = health_checks) do
    HealthChecks.changeset(health_checks, %{})
  end
end
