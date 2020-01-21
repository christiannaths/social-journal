Rails.application.routes.draw do
  scope :v1 do
    get '/health', to: 'health_checks#get'
    post '/health', to: 'health_checks#post'
    resources :users do
      resources :journals, only: %i[index create]
    end
    resources :journals, only: %i[show update destroy] do
      resources :entries, only: %i[index create]
    end
    resources :entries, only: %i[show update destroy]
  end
end
