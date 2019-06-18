input = [
  "Hello World",
  "Bye World",
  "Useless World",
  "Useless Big World"
]

input.each do |text|
  result = a.split(' ').reverse.join(' ')
  result.gsub!(/^\"|\"?$/, '')
  
  puts result
end