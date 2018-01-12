class Note < ApplicationRecord

  belongs_to :user

  validates :message, presence: true, length: { maximum: 511 }  
  validates :user_id, presence: true

end
