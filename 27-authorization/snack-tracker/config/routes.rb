Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "snacks#home", as: "homepage"
  get "/snacks/about", to: "snacks#about", as: "about"
  # get "/snacks", to: "snacks#index", as: "snacks"
  # # get "/supercoolroute", to: "fake#madeup" 
  # get "/snacks/:id", to: "snacks#show", as: "snack"
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"
  get "/logout", to: "sessions#logout"
  resources :snacks
  resources :retailers, only: [:index, :show, :new, :create]
  resources :users, only: [:new, :create]
end
