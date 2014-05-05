GoalNumberApi::Application.routes.draw do
  root to: 'application#index'
  devise_for :users
  resources :game, except: [:new, :edit]
end
