Rails.application.routes.draw do
  get '/health', to: 'health_checks#get'
  post '/health', to: 'health_checks#post'
end
