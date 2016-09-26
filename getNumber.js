function isMultiple(number,base){
  return !(number % base)
}

function getNumber(realNumber){
  var mask = ''
  if(isMultiple(realNumber,3)&&isMultiple(realNumber,5)){
    mask = 'FizzBuzz'
  }else if(isMultiple(realNumber,3)){
    mask = 'Fizz'
  }
  else if(isMultiple(realNumber,5)){
    mask = 'Buzz'
  }
  return mask === '' ? realNumber : mask
}

module.exports = getNumber
