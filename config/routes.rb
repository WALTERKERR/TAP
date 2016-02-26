Rails.application.routes.draw do
  get '/find' => 'data#find'
  get '/find_city' => 'data#find_city'
  get '/find_all' => 'data#find_all'
  get '/about' => 'pages#about'

  get '/upload' => 'pages#upload'
  post '/upload' => 'pages#parse_upload'
  get '/test' => 'pages#test'

  post '/unicorn' => 'data#unicorn'

  root 'pages#index'

  resources :data
end
