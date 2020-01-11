defmodule EqualCurve.InternalTest do
  use EqualCurve.DataCase

  alias EqualCurve.Internal

  describe "health_checks" do
    alias EqualCurve.Internal.HealthChecks

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def health_checks_fixture(attrs \\ %{}) do
      {:ok, health_checks} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Internal.create_health_checks()

      health_checks
    end

    test "list_health_checks/0 returns all health_checks" do
      health_checks = health_checks_fixture()
      assert Internal.list_health_checks() == [health_checks]
    end

    test "get_health_checks!/1 returns the health_checks with given id" do
      health_checks = health_checks_fixture()
      assert Internal.get_health_checks!(health_checks.id) == health_checks
    end

    test "create_health_checks/1 with valid data creates a health_checks" do
      assert {:ok, %HealthChecks{} = health_checks} = Internal.create_health_checks(@valid_attrs)
    end

    test "create_health_checks/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Internal.create_health_checks(@invalid_attrs)
    end

    test "update_health_checks/2 with valid data updates the health_checks" do
      health_checks = health_checks_fixture()
      assert {:ok, %HealthChecks{} = health_checks} = Internal.update_health_checks(health_checks, @update_attrs)
    end

    test "update_health_checks/2 with invalid data returns error changeset" do
      health_checks = health_checks_fixture()
      assert {:error, %Ecto.Changeset{}} = Internal.update_health_checks(health_checks, @invalid_attrs)
      assert health_checks == Internal.get_health_checks!(health_checks.id)
    end

    test "delete_health_checks/1 deletes the health_checks" do
      health_checks = health_checks_fixture()
      assert {:ok, %HealthChecks{}} = Internal.delete_health_checks(health_checks)
      assert_raise Ecto.NoResultsError, fn -> Internal.get_health_checks!(health_checks.id) end
    end

    test "change_health_checks/1 returns a health_checks changeset" do
      health_checks = health_checks_fixture()
      assert %Ecto.Changeset{} = Internal.change_health_checks(health_checks)
    end
  end
end
