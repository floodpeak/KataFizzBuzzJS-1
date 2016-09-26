function isMultiple(number,base){
  return !(number % base)
}

function getNumber(realNumber){
  var maskNumber = realNumber
  if(isMultiple(realNumber,3)&&isMultiple(realNumber,5)){
    maskNumber = 'FizzBuzz'
  }else if(isMultiple(realNumber,3)){
    maskNumber = 'Fizz'
  }
  else if(isMultiple(realNumber,5)){
    maskNumber = 'Buzz'
  }
  return maskNumber
}

module.exports = getNumber
