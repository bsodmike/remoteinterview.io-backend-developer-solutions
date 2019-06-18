def all_equal?(arr)
  arr.uniq.size <= 1
end

#a = "8 8 2 4 8"
a = "1 2 3"

arr = a.split(' ')
  
freq = arr.inject(Hash.new(0)) { |h,v| h[v] += 1; h }
max = arr.max_by { |v| freq[v] }

if all_equal?(freq.values)
  puts -1
else
  puts arr.max_by { |v| freq[v] }
end