Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "api/users/sessions",
    registrations: "api/users/registrations",
  }

  namespace :api do
    resources :searches, only: [:index]
  end

  get "/" => "home#home"

  devise_scope :user do
    post "api/users/sign_in", to: "api/users/sessions#create"
    post "api/users/sign_up", to: "api/users/registrations#create"
  end

  get "/*path", to: "home#home"
end
