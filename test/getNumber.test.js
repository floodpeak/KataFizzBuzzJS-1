var expect = require('chai').expect
var getNumber = require('../getNumber')

describe('number fizzbuzzed',function(){
  it('should get 1 when it is 1',function(){
    expect(getNumber(1)).to.be.equal(1)
  })
  it('should get Fizz when it is 3', function(){
    expect(getNumber(3)).to.be.equal('Fizz')
  })
  it('should get Buzz when it is 5', function(){
    expect(getNumber(5)).to.be.equal('Buzz')
  })
  it('should get FizzBuzz when it is 15',function(){
    expect(getNumber(15)).to.be.equal('FizzBuzz')
  })
})
