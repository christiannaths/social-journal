# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :api,
  namespace: EqualCurve,
  ecto_repos: [EqualCurve.Repo],
  generators: [binary_id: true]

# Add support for microseconds at the DB level
# this avoids having to configure it on every migration file
config :api, EqualCurveWeb.Repo, migration_timestamps: [type: :utc_datetime_usec]

# Configures the endpoint
config :api, EqualCurveWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "3ql5Jq6LC15YDYi9N9N3DMiN5uzm6xFJU+a7VQUgv38QQUaZd6dIHia3Y5/zH/K1",
  render_errors: [view: EqualCurveWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: EqualCurve.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
