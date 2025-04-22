movies = {:'The Godfather' => 1972, :"Star Wars IV" => 1977, :"Pulp Fiction" => 1994, :"The Matrix" => 1999, :"Titanic" => 1997}
years = [movies[:'The Godfather'], movies[:'Star Wars IV'], movies[:'Pulp Fiction'], movies[:'The Matrix'], movies[:'Titanic']]

puts years[0]
puts years[1]
puts years[2]
puts years[3]
puts years[4]

# def get_sum(array)
#   size = array.length
#   if size == 1
#     return array[0]
#   else
#     return (array[0] + get_sum(array[1...size]))
#   end
# end
# puts get_sum([1,2,3])