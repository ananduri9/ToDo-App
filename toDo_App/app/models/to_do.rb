class ToDo < ApplicationRecord

  belongs_to :user

  default_scope -> { order(created_at: :desc) }
  validates :message, presence: true, length: { maximum: 511 }
  validates :deadline, presence: true
  validates :user_id, presence: true

end
