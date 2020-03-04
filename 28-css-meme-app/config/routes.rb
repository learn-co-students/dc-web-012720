Rails.application.routes.draw do
  root to: 'pages#home'
  get '/login' => 'sessions#new'
  get '/signup' => 'users#new'
  post '/login' =>'sessions#create'
  delete '/logout' => 'sessions#destroy'

  resources :images, only: [:index, :show, :new, :create]
  resources :memes, only: [:index, :show, :new, :create]
 
  # root to: 'pages#home'
  # get '/photo_gallery', to: 'pages#photo_gallery'
  # get '/grand_canyon', to: 'pages#grand_canyon'
end
