defmodule EqualCurveWeb.Router do
  use EqualCurveWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", EqualCurveWeb do
    pipe_through :api
  end
end
