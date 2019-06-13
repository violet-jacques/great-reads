module Api
  module Users
    class SessionsController < ::Devise::SessionsController
      skip_before_action :require_no_authentication
      EMAIL_ERROR = "Email not found".freeze
      PASSWORD_INVALID = "Password invalid".freeze

      def create
        if current_user
          render json: { success: true, user: current_user.to_h }
        elsif !user
          render json: { error: EMAIL_ERROR }
        elsif !valid_password?
          render json: { error: PASSWORD_INVALID }
        else
          sign_in(user)

          render json: { success: true, user: user.to_h }
        end
      end

      private

      def user
        @user ||=
          User.find_for_database_authentication(
            email: user_params[:email],
          )
      end

      def user_params
        params.require(:user).permit(
          :email,
          :password,
        )
      end

      def valid_password?
        user&.valid_password?(user_params[:password])
      end
    end
  end
end
