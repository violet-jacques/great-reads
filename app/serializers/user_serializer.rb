class UserSerializer
  def self.serialize(user)
    new(user).serialize
  end

  def initialize(user)
    @user = user
  end

  def serialize
    {
      id: user.id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    }
  end

  private

  attr_reader :user
end
