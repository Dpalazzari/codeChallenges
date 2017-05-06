require 'pry-state'

class Collections

  attr_reader :states, :capitals

  def initialize
    @states   = {"Oregon" => "OR", "Alabama" => "AL", "New Jersey" => "NJ", "Colorado" => "CO"}
    @capitals = {"OR" => "Salem", "AL" => "Montgomery", "NJ" => "Trenton", "CO" => "Denver"}
  end

  def ascending_age(data)
    grouped_people = data.group_by { |arr| arr[1] }
    grouped_people.keys.sort.map do |age|
      build_ascending_ages(grouped_people, age)
    end.flatten
  end

  def build_ascending_ages(group, age)
    if group[age].length > 1
      collect_people(group[age])
    else
      group[age][0][0]
    end
  end

  def collect_people(arr)
    arr.map { |person| person[0] }
  end

  def find_capital_by_state(state)
    return "Unknown" if states[state].eql?(nil)
    return capitals[states[state]]
  end

  def find_state_by_capital(capital)
    states.map do |key, value|
      key if value.eql?(abbreviation(capital))
    end.compact.join
  end

  def abbreviation(capital)
    capitals.map do |key, value|
      key if value.eql?(capital)
    end.compact.join
  end

end
