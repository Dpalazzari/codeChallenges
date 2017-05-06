require 'pry-state'

class Collections

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

end
