Rails.application.routes.draw do
  resources :entries
  get '/health', to: 'health_checks#get'
  post '/health', to: 'health_checks#post'

  resources :users
  resources :journals
  resources :entries
end
