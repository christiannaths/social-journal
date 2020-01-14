class JournalsController < ApplicationController
  before_action :set_journal, only: %i[show update destroy]
  before_action :set_user, only: %i[create]

  # GET /journals
  def index
    @journals = Journal.all

    render json: @journals
  end

  # GET /journals/1
  def show
    render json: @journal
  end

  # POST /journals
  def create
    @journal = @user.journals.build(journal_params)

    if @journal.save
      render json: @journal, status: :created, location: @journal
    else
      render json: @journal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /journals/1
  def update
    if @journal.update(journal_params)
      render json: @journal
    else
      render json: @journal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /journals/1
  def destroy
    @journal.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_journal
    @journal = Journal.find(params[:id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  # Only allow a trusted parameter "white list" through.
  def journal_params
    params.fetch(:journal, {}).permit(:namespace, :title, :description)
  end
end
