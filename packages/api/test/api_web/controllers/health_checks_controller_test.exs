defmodule EqualCurveWeb.HealthChecksControllerTest do
  use EqualCurveWeb.ConnCase

  alias EqualCurve.Internal
  alias EqualCurve.Internal.HealthChecks

  @create_attrs %{

  }
  @update_attrs %{

  }
  @invalid_attrs %{}

  def fixture(:health_checks) do
    {:ok, health_checks} = Internal.create_health_checks(@create_attrs)
    health_checks
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all health_checks", %{conn: conn} do
      conn = get(conn, Routes.health_checks_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create health_checks" do
    test "renders health_checks when data is valid", %{conn: conn} do
      conn = post(conn, Routes.health_checks_path(conn, :create), health_checks: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.health_checks_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.health_checks_path(conn, :create), health_checks: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update health_checks" do
    setup [:create_health_checks]

    test "renders health_checks when data is valid", %{conn: conn, health_checks: %HealthChecks{id: id} = health_checks} do
      conn = put(conn, Routes.health_checks_path(conn, :update, health_checks), health_checks: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.health_checks_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, health_checks: health_checks} do
      conn = put(conn, Routes.health_checks_path(conn, :update, health_checks), health_checks: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete health_checks" do
    setup [:create_health_checks]

    test "deletes chosen health_checks", %{conn: conn, health_checks: health_checks} do
      conn = delete(conn, Routes.health_checks_path(conn, :delete, health_checks))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.health_checks_path(conn, :show, health_checks))
      end
    end
  end

  defp create_health_checks(_) do
    health_checks = fixture(:health_checks)
    {:ok, health_checks: health_checks}
  end
end
