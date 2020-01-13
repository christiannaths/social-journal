Rails.application.routes.draw do
  get '/health', to: 'health_checks#get'
  post '/health', to: 'health_checks#post'

  resources :users
  resources :journals, except: %w[show]

  get '/:namespace', to: 'journals#show'
end
