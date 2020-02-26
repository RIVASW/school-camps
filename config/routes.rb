Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: 'json' } do
    get 'camps', to: 'camps#index'
    get 'camps/:id', to: 'camps#show'
  end

  get '*page', to: 'static#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  root 'static#index'
end
