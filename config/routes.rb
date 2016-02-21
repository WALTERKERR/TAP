Rails.application.routes.draw do
  get '/find' => 'data#find'

  get '/upload' => 'pages#upload'
  post '/upload' => 'pages#parse_upload'
  get '/test' => 'pages#test'

  root 'pages#index'

  resources :data
end
