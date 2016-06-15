Rails.application.routes.draw do
  mount RedactorRails::Engine => '/redactor_rails'
  get 'errors/not_found'

  get 'errors/internal_server_error'

  root to: 'home#index'

  devise_for :admin_users, ActiveAdmin::Devise.config
  devise_for :users, controllers: { :omniauth_callbacks => "users/omniauth_callbacks",
                                    :registrations => 'users/registrations' }
  begin
    ActiveAdmin.routes(self)
  rescue Exception => e
    puts "ActiveAdmin: #{e.class}: #{e}"
  end

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  namespace :home, path: '/' do
    get :about
    get :become_guide
    get :term_of_services, path: 'term-of-services'
    get :privacy_policy, path: 'privacy-policy'
    get :copyright
    get :contact_us
    post :send_contact
    get :help
    get :example
    get :founders
    get :how_it_works, path: 'how-it-works'
    get :safety
    get :careers
    get :blog
  end

  resources :search, only: [:index, :create] do
  end

  resources :tours, path: 'tours' do
    member do
      get :profile
      put :update_profile, path: 'profile'
      patch :update_profile, path: 'profile'
      get :tour_itinerary
      put :update_tour_itinerary, path: 'tour_itinerary'
      get :additional_info
      put :update_additional_info, path: 'additional_info'
      get :preview
      put :update_preview, path: 'preview'
    end
    resources :reservations do
      member do
        get :passenger
        get :billing_information
        get :review_and_submit
      end
    end
  end

  resources :users, only: [:show, :update] do
    member do
      get :public_profile
    end
  end

  resources :users, only: [:index], path: '/manage/profile' do
    collection do
      get :host, path: 'guide'
      post 'become_guide' => 'hosts#create', :as => 'become_guide'
      get :references
      get :reservations
      get :travels
      get :crafted_tours
      get :verifications
      get :account_settings
      get :profile_information
      get :availability
    end
  end

  namespace :users, path: '/manage/profile' do
    devise_scope :user do
      resources :references, only: [] do
        collection do
          post :email
          post :facebook
          post :twitter
          post :google_plus
        end
      end
    end
  end

  resources :messages

  resources :countries do
    resources :cities, only: [:show]
  end

  resources :subscribers, only: [:create]
end
