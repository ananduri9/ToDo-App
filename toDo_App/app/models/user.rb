class User < ApplicationRecord

  has_many :to_dos
  has_many :notes

  validates :uname, presence: true, length: { minimum: 4, maximum: 50 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
		    uniqueness: { case_sensitive: false }   

  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }

end