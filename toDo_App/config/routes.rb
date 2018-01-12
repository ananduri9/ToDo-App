Rails.application.routes.draw do

  get 'login/sessions'

  root 'static_pages#home'

  get '/home', to: 'static_pages#home'

  get '/list', to: 'static_pages#list'

  get '/about', to: 'static_pages#about'

  get '/signup', to: 'users#new'

  post '/signup', to: 'users#create'

  get '/login', to: 'login#new'

  post '/login', to: 'login#create'

  post '/to_do', to: 'to_dos#create'

  post '/to_dos', to: 'to_dos#destroy'

  post '/note', to: 'notes#create'

  post '/notes', to: 'notes#destroy'

  get '/note', to: 'notes#new'

  get '/users/notes', to: 'notes#new'



  resources :users

  resources :to_dos,          only: [:create, :destroy]

  resources :notes,          only: [:create, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
