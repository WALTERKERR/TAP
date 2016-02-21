Rails.application.routes.draw do
  get '/find' => 'data#find'

  get '/upload' => 'pages#upload'
  post '/upload' => 'pages#parse_upload'

  root 'pages#index'

  resources :data
end
