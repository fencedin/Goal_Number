GoalNumberApi::Application.routes.draw do
  root to: 'application#index'
  devise_for :users
  resources :games, except: [:new, :edit]
end
