require 'test_helper'

class HealthChecksControllerTest < ActionDispatch::IntegrationTest
  setup { @health_check = health_checks(:one) }

  test 'should get index' do
    get health_checks_url, as: :json
    assert_response :success
  end

  test 'should create health_check' do
    assert_difference('HealthCheck.count') do
      post health_checks_url, params: { health_check: {} }, as: :json
    end

    assert_response 201
  end

  test 'should show health_check' do
    get health_check_url(@health_check), as: :json
    assert_response :success
  end

  test 'should update health_check' do
    patch health_check_url(@health_check),
          params: { health_check: {} }, as: :json
    assert_response 200
  end

  test 'should destroy health_check' do
    assert_difference('HealthCheck.count', -1) do
      delete health_check_url(@health_check), as: :json
    end

    assert_response 204
  end
end
