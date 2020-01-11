defmodule EqualCurveWeb.HealthChecksView do
  use EqualCurveWeb, :view
  alias EqualCurveWeb.HealthChecksView

  def render("index.json", %{health_check: health_check}) do
    "ok"
  end

  def render("show.json", %{health_checks: health_checks}) do
    %{data: render_one(health_checks, HealthChecksView, "health_checks.json")}
  end

  def render("health_checks.json", %{health_checks: health_checks}) do
    health_checks.id
  end
end
