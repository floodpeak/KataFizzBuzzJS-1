var getNumber = require('./getNumber')

console.log("hello fizz and buzz");

function main() {
  for(var i = 1;i<=100;i++){
    console.log(getNumber(i));
  }
}

main()
