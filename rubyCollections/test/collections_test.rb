require 'pry-state'
require 'minitest/autorun'
require 'minitest/emoji'
require './lib/collections'

class CollectionsTest < Minitest::Test

  def setup
    @coll = Collections.new
  end

  def test_it_exists
    assert @coll
  end

  def test_it_outputs_names_by_ascending_age
    data   = [['Frank', 33], ['Stacy', 15], ['Juan', 24], ['Dom', 32], ['Steve', 24], ['Jill', 24]]
    result = @coll.ascending_age(data)
    answer = %w(Stacy Juan Steve Jill Dom Frank)
    assert_equal answer, result
  end

  def test_collect_people_method_returns_an_array_of_names
    data   = [["Juan", 24], ["Steve", 24], ["Jill", 24]]
    result = @coll.collect_people(data)
    answer = %w(Juan Steve Jill)
    assert_equal answer, result
  end

  def test_it_returns_an_array_of_names_in_ascending_order
    data   = {33=>[["Frank", 33]], 15=>[["Stacy", 15]], 24=>[["Juan", 24]], 32=>[["Dom", 32]]}
    age    = 33
    result = @coll.build_ascending_ages(data, age)
    answer = "Frank"
    assert_equal answer, result
  end

  def test_it_returns_all_names_if_there_are_multiple_people_with_the_saem_age
    data   = {33=>[["Frank", 33]], 15=>[["Stacy", 15]], 24=>[["Juan", 24], ["Steve", 24], ["Jill", 24]], 32=>[["Dom", 32]]}
    age    = 24
    result = @coll.build_ascending_ages(data, age)
    answer = %w(Juan Steve Jill)
    assert_equal answer, result
  end

end
