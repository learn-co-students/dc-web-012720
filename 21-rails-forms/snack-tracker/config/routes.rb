Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "snacks#home", as: "homepage"
  # get "/snacks", to: "snacks#index", as: "snacks"
  # # get "/supercoolroute", to: "fake#madeup" 
  # get "/snacks/:id", to: "snacks#show", as: "snack"
  resources :snacks, only: [:index, :show]
end
