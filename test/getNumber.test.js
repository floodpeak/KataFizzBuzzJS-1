var expect = require('chai').expect
var getNumber = require('../getNumber')

describe('number fizzbuzzed',function(){
  it('should get 1 when it is 1',function(){
    expect(getNumber(1)).to.be.equal(1)
  })
  it('should get Fizz when it is 3', function(){
    expect(getNumber(3)).to.be.equal('Fizz')
  })
})