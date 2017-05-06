require 'pry-state'
require 'minitest/autorun'
require 'minitest/emoji'
require './lib/collections'
require './lib/scrabble'

class CollectionsTest < Minitest::Test

  def setup
    @coll     = Collections.new
    @scrabble = Scrabble.new
  end

  def test_they_exist
    assert @coll
    assert @scrabble
  end

  def test_it_initializes_with_states
    result    = @coll.states
    assert_equal Hash, result.class
    assert_equal "OR", result["Oregon"]
    hash_keys = ["Oregon", "Alabama", "New Jersey", "Colorado"]
    assert_equal hash_keys, result.keys
  end

  def test_it_initializes_with_capitals
    result    = @coll.capitals
    assert_equal Hash, result.class
    assert_equal "Salem", result["OR"]
    hash_keys = ["OR", "AL", "NJ", "CO"]
    assert_equal hash_keys, result.keys
  end

  def test_it_initializes_with_a_scrabble_library
    result = @coll.library
    assert_equal Hash, result.class
    assert_equal 26, result.keys.count
  end

  def test_scrabble_has_scoring_library
    result = @scrabble.library
    assert_equal Hash, result.class
    assert_equal 26, result.keys.count
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

  def test_collections_can_find_the_capital_when_given_a_state
    state  = 'Colorado'
    result = @coll.find_capital_by_state(state)
    assert_equal 'Denver', result
  end

  def test_it_returns_unknown_for_states_that_are_not_in_the_hash
    state  = 'Minnesota'
    result = @coll.find_capital_by_state(state)
    assert_equal 'Unknown', result
  end

  def test_it_can_return_the_state_when_given_the_capital
    capital = 'Denver'
    result  = @coll.find_state_by_capital(capital)
    assert_equal 'Colorado', result
  end

  def test_it_can_score_single_letters_in_scrabble
    letter = 'H'
    result = @coll.score_word(letter)
    assert_equal 4, result
  end

  def test_it_can_score_a_whole_word_in_Scrabble
    word   = 'Hello'
    result = @coll.score_word(word)
    assert_equal 8, result
  end

end
