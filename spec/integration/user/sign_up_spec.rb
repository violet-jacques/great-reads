require "rails_helper"

RSpec.describe "Sign up integration", type: :feature, js: true do
  describe "signing up" do
    let(:email) { "test@example.com" }
    let(:password) { "password" }
    let(:password_confirmation) { password }
    let(:sign_up!) do
      submit_action(
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      )
    end

    context "email alread in use" do
      let!(:user) { create(:user, email: email) }

      it "displays email error message" do
        sign_up!

        expect(page).to have_current_path("/")
        expect(page).to have_content("Email already in use")
      end
    end

    context "passwords dont match" do
      let(:password_confirmation) { "wrong_password" }

      it "displays email error message" do
        sign_up!

        expect(page).to have_current_path("/")
        expect(page).to have_content("Passwords dont match")
      end
    end

    context "passwords too short" do
      let(:password) { "hey" }
      let(:password_confirmation) { "hey" }

      it "displays email error message" do
        sign_up!

        expect(page).to have_current_path("/")
        expect(page).to have_content("password is too short (minimum is 6 characters)")
      end
    end

    context "valid params" do
      it "sign the user up, in, and redircts to home page" do
        expect(User.count).to eq(0)
        sign_up!

        sleep 1

        expect(User.count).to eq(1)
      end
    end
  end

  def submit_action(email:, password:, password_confirmation:)
    visit("/")
    find("a", text: "Account").click
    find("a", text: "Register for one!").click
    fill_in("first_name", :with => "Sup")
    fill_in("last_name", :with => "Dawg")
    fill_in("email", :with => email)
    fill_in("password", :with => password)
    fill_in("password_confirmation", :with => password_confirmation)
    click_button("Submit")
  end
end
