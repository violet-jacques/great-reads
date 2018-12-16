Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
  }
  get "/" => "home#home"
  get "/*path", to: "home#home"

  devise_scope :user do
    post "users/sign_in", to: "users/sessions#create"
    post "users/sign_up", to: "users/registrations#create"
  end
end
