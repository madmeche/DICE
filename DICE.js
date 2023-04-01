var dice = {
    sideSix: 6,
    sideTen: 10,
    roll: function() {
    //   var randomNumber = Math.floor(Math.random() * this.sideSix); //error thrown! must add '1' to not get a zero.
      var randomNumber6 = Math.floor(Math.random() * this.sideSix) + 1;
      var randomNumber10 = Math.floor(Math.random() * this.sideTen) + 1; //error thrown! rolled same number over again when in line with sideSix
      return randomNumber6;
      return randomNumber10; //error thrown! rolled same number over again when in line with sideSix
    },
  }

  var result= dice.roll()
  console.log(result)
}