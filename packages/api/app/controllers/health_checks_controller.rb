class HealthChecksController < ApplicationController
  before_action :set_execution_start_time

  def get
    return_object = {}
    return_object[:status] = :SUCCESS
    return_object[:execution] = execution_time_in_ms

    render json: return_object
  end

  def post
    return_object = touch_health_check.attributes
    return_object[:status] = :SUCCESS
    return_object[:execution] = execution_time_in_ms
    return_object[:hash_id] = touch_health_check.hashid

    render json: return_object
  end

  private

  def touch_health_check
    existing_health_check = HealthCheck.last
    health_check = existing_health_check || HealthCheck.create
    health_check.touch

    return health_check
  end

  def execution_time_in_ms
    return (Time.now - @execution_start_time) * 1000.0
  end

  def set_execution_start_time
    @execution_start_time = Time.now
  end
end
