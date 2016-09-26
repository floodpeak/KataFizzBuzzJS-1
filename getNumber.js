function isMultiple(number,base){
  return !(number % base)
}

function getNumber(realNumber){
  var maskNumber = realNumber
  if(isMultiple(realNumber,3)){
    if(isMultiple(realNumber,5)){
      maskNumber = 'FizzBuzz'
    }else{
      maskNumber = 'Fizz'      
    }
  }
  else if(isMultiple(realNumber,5)){
    maskNumber = 'Buzz'
  }
  return maskNumber
}

module.exports = getNumber
