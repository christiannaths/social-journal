Rails.application.routes.draw do
  get '/health', to: 'health_checks#get'
  post '/health', to: 'health_checks#post'

  scope :v1 do
    resources :users do
      resources :journals, only: %i[index new create]
    end
    resources :journals, only: %i[show edit update destroy]
    resources :entries
  end
end
