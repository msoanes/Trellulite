# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  list_id     :integer          not null
#  description :text
#  ord         :float            default(0.0)
#  created_at  :datetime
#  updated_at  :datetime
#

class Card < ActiveRecord::Base
  belongs_to :list
  has_many :items, dependent: :destroy
  has_many :card_assignments, dependent: :destroy

  default_scope { order(:ord) }

  def self.update_order(board_id, new_order)
    lists = Card.where(board_id: board_id)
    new_order.each_with_index do |id, ord|
      lists.find(id).update(ord: ord)
    end
  end

end
