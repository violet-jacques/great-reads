require 'rails_helper'

RSpec.describe 'SessionsController', :type => :request do
  describe '#create' do
    let(:email) { 'test@example.com' }
    let(:password) { 'password' }
    let(:params) do
      {
        user: {
          email: email,
          password: password,
        }
      }
    end
    let!(:user) do
      create(
        :user,
        email: 'test@example.com',
        password: 'password',
        password_confirmation: 'password',
      )
    end
    let(:post!) { post '/users/sign_in', :params => params }

    context 'invalid params' do
      context 'invalid email' do
        let(:email) { 'wrong@example.com' }

        it 'returns an email error json response' do
          post!
          response = JSON.parse(body)

          expect(response).to eq('error' => 'Email not found')
        end
      end

      context 'invalid password' do
        let(:password) { 'wrongpassword' }

        it 'returns a password error json response' do
          post!
          response = JSON.parse(body)

          expect(response).to eq('error' => 'Password invalid')
        end
      end
    end

    context 'valid params' do
      it 'returns the user as a json response' do
        post!
        response = JSON.parse(body)

        expect(response).to eq(
          'success' => true,
          'user' => {
            'id' => user.id,
            'email' => 'test@example.com',
          }
        )
      end
    end
  end
end
