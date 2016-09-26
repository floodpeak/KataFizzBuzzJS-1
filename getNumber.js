function isMultiple(number,base){
  return !(number % base)
}

function getNumber(realNumber){
  var maskNumber = realNumber
  if(isMultiple(realNumber,3)){
    if(isMultiple(realNumber,5)){
      return 'FizzBuzz'
    }
    return 'Fizz'
  }
  if(isMultiple(realNumber,5)){
    return 'Buzz'
  }
  return maskNumber
}

module.exports = getNumber
