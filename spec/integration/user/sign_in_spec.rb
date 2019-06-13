require "rails_helper"

RSpec.describe "Sign in integration", type: :feature, js: true do
  describe "signing in" do
    let(:email) { "test@example.com" }
    let(:password) { "password" }
    let!(:user) do
      create(
        :user,
        email: "test@example.com",
        password: "password",
        password_confirmation: "password",
      )
    end
    let(:sign_in!) { sign_in_action(email: email, password: password) }

    context "with valid params" do
      it "signs the user in" do
        sign_in!

        expect(page).to have_current_path("/")
      end
    end

    context "with invalid params" do
      context "with invalid email" do
        let(:email) { "wrong@example.com" }

        it "displays invalid email error message" do
          sign_in!

          expect(page).to have_content("Email not found")
        end
      end

      context "with invalid password" do
        let(:password) { "wrongpassword" }

        it "displays invalid password error message" do
          sign_in!

          expect(page).to have_content("Password invalid")
        end
      end
    end
  end

  def sign_in_action(email:, password:)
    visit("/")
    find("a", text: "Account").click
    fill_in("email", :with => email)
    fill_in("password", :with => password)
    click_button("Submit")
  end
end
