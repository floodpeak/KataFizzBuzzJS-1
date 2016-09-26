function isMultiple(number,base){
  return !(number % base)
}

function getNumber(realNumber){
  var mask = ''
  if(isMultiple(realNumber,3)){
    mask += 'Fizz'
  }
  if(isMultiple(realNumber,5)){
    mask += 'Buzz'
  }
  return mask === '' ? realNumber : mask
}

module.exports = getNumber
