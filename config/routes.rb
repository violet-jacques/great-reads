Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
  }
  get "/" => "home#home"
  get "/*path", to: "home#home"

  devise_scope :user do
    post "api/users/sign_in", to: "api/users/sessions#create"
    post "api/users/sign_up", to: "api/users/registrations#create"
  end
end
