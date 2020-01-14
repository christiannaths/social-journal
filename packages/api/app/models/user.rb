class User < ApplicationRecord
  include Hashid::Rails

  has_many :user_journals
  has_many :journals, through: :user_journals

  validates_uniqueness_of :session_id
end
