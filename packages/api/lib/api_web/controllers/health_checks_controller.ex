defmodule EqualCurveWeb.HealthChecksController do
  use EqualCurveWeb, :controller

  import Ecto.Query

  alias EqualCurve.Repo
  alias EqualCurve.Internal
  alias EqualCurve.Internal.HealthChecks

  action_fallback EqualCurveWeb.FallbackController

  def get(conn, _params) do
    health_check =
      HealthChecks
      |> limit(1)
      |> Repo.one()

    render(conn, "index.json", health_check: health_check)
  end

  def post(conn, _params) do
    with {:ok, %HealthChecks{} = health_checks} <-
           Internal.create_health_checks(health_checks_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.health_checks_path(conn, :show, health_checks))
      |> render("show.json", health_checks: health_checks)
    end
  end
end
