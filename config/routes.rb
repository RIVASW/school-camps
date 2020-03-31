Rails.application.routes.draw do

  namespace :v1, defaults: { format: 'json' } do
    resources :camps do
      get :avatar, on: :member
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  root 'static#index'
end
