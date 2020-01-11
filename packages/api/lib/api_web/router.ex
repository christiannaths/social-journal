defmodule EqualCurveWeb.Router do
  use EqualCurveWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "", EqualCurveWeb do
    pipe_through :api

    resources "/health", HealthChecksController, only: [:index]
  end
end
