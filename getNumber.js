function getNumber(realNumber){
  if(!(realNumber%3)){
    return 'Fizz'
  }
  if(!(realNumber%5)){
    return 'Buzz'
  }
  return realNumber
}

module.exports = getNumber
