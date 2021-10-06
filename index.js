function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return ride = "This one is on me!";
  } else if (ride >= 2000 && ride < 2500) {
     return ride = "I will gladly take your thirty bucks."
  } else if (ride > 2500) {
      return ride = "No can do.";
  }
}
// describe('ternaryCheckCity()', function () {
//   it('returns "Ok, sounds good." when the city is NYC', function () {
//     expect(ternaryCheckCity('NYC')).to.equal('Ok, sounds good.');
//   });
function ternaryCheckCity(city){
  // Write your code here!
let result;
result = city === "NYC"? "Ok, sounds good." : "No go." ;
return result
}
// describe('switchOnCharmFromTip()', function () {
//   it('should return "Thank you so much." if the tip is generous', function () {
//     expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
//   });

//   it('should return "Thank you." if the tip is not as generous', function () {
//     expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
//   });

//   it('should return "Bye." if anything else', function () {
//     expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
//   });
// });
// });
function switchOnCharmFromTip(tip){
switch (tip) {
  case "generous":
    return "Thank you so much.";
    break;
  case "not as generous":  
    return "Thank you.";
    break;

  default:
    return "Bye."

}
}