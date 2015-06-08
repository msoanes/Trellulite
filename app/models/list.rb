# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  board_id   :integer          not null
#  ord        :float            default(0.0)
#  created_at :datetime
#  updated_at :datetime
#

class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_many :cards, dependent: :destroy

  default_scope { order(:ord) }

  # TODO: class method for updating orders?
  def self.update_order(board_id, new_order)
    lists = List.where(board_id: board_id)
    new_order.each_with_index do |id, ord|
      lists.find(id).update(ord: ord)
    end
  end
end
