require 'test_helper'

class LoginControllerTest < ActionDispatch::IntegrationTest
  test "should get sessions" do
    get login_sessions_url
    assert_response :success
  end

end
