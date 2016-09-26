function getNumber(realNumber){
  if(!(realNumber%3)){
    if(!(realNumber%5)){
      return 'FizzBuzz'
    }
    return 'Fizz'
  }
  if(!(realNumber%5)){
    return 'Buzz'
  }
  return realNumber
}

module.exports = getNumber
