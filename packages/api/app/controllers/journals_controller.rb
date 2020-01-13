class JournalsController < ApplicationController
  def index
    journals = Journals.all

    render json: journals
  end

  def show; end

  def create; end

  def update; end

  def destroy; end
end
