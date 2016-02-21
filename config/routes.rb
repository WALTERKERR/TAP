Rails.application.routes.draw do
  get '/find' => 'data#find'
  get '/find_city' => 'data#find_city'

  get '/upload' => 'pages#upload'
  post '/upload' => 'pages#parse_upload'

  root 'pages#index'

  resources :data
end
