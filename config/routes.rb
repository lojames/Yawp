Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:show, :index] do
      resources :reviews, only: [:index, :create, :update, :destroy]
      resources :images, only: [:index, :show, :create]
    end
    resources :categories, only: [:show]

  end
  root to: "static_pages#root"
end
