class BusinessHour < ApplicationRecord
  validates :day, :hours, presence: true
  validates :day, inclusion: %w(Sun Mon Tue Wed Thu Fri Sat)

  belongs_to :business

end
