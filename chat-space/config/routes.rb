Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:inex, :edit, :update]
  resources :groups, only: [:new, :edit, :update, :create,] do
    resources :messages, only: [:index, :create]
  end
end
