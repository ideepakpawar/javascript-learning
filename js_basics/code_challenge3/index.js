var tip = [];
var bills = [148, 45, 348];
function tipCalculator(bill) {
  switch (true) {
    case bill < 50:
      tip.push((bill * 20) / 100);
      break;
    case bill >= 50 && bill < 200:
      tip.push((bill * 15) / 100);
      break;
    case bill >= 200:
      tip.push((bill * 10) / 100);
      break;
    default:
      tip;
  }
}
tipCalculator(bills[0]);
tipCalculator(bills[1]);
tipCalculator(bills[2]);
var actualBill = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log("Tips: " + tip);
console.log("Actual Bill: " + actualBill);
console.log("Bills: " + bills);
