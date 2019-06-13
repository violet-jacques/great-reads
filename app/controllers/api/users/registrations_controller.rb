module Api
  module Users
    class RegistrationsController < ::Devise::RegistrationsController
      skip_before_action :require_no_authentication
      EMAIL_ERROR = "Email already in use".freeze
      PASSWORD_INVALID = "Passwords dont match".freeze

      def create
        if user_already_exists?
          render json: { error: EMAIL_ERROR }
        elsif !passwords_match?
          render json: { error: PASSWORD_INVALID }
        elsif user.save
          sign_in(user)

          render json: { success: true, user: user.to_h }
        else
          render json: { error: error_messages }
        end
      end

      private

      def user_errors
        user.errors
      end

      def error_messages
        user_errors
          .messages
          .map do |(error, messages)|
            "#{error} #{messages.join(', ')}"
          end
          .join(",")
      end

      def user_already_exists?
        User.find_for_database_authentication(
          email: user_params[:email],
        ).present?
      end

      def user
        @user ||= User.new(
          email: user_params[:email],
          password: user_params[:password],
          first_name: user_params[:first_name],
          last_name: user_params[:last_name],
        )
      end

      def passwords_match?
        user_params[:password] == user_params[:password_confirmation]
      end

      def user_params
        params.require(:user).permit(
          :first_name,
          :last_name,
          :email,
          :password,
          :password_confirmation,
        )
      end
    end
  end
end
