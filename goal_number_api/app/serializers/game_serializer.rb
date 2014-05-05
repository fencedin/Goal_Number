class ContactSerializer < ActiveModel::Serializer
  attributes :id, :number, :goal
end
