function isMultiple(number,base){
  return !(number % base)
}

function getNumber(realNumber){
  if(isMultiple(realNumber,3)){
    if(isMultiple(realNumber,5)){
      return 'FizzBuzz'
    }
    return 'Fizz'
  }
  if(isMultiple(realNumber,5)){
    return 'Buzz'
  }
  return realNumber
}

module.exports = getNumber
