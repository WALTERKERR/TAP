Rails.application.routes.draw do
  get '/find' => 'data#find'
  get '/find_city' => 'data#find_city'

  get '/upload' => 'pages#upload'
  post '/upload' => 'pages#parse_upload'
  get '/test' => 'pages#test'

  post '/unicorn' => 'pages#unicorn'

  root 'pages#index'

  resources :data
end
