
// Testing: using Array
// var dice = {
//     sideSix: 6,
//     sideTen: 10
//     roll: function () {
//         const diceSix = [1, 2, 3, 4, 5, 6];
//         const diceTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //   for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        // var randomNumber = Math.floor(Math.random() * this.sideSix) + 1;
//           }
    
// //      }
//   }

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

