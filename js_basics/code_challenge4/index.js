var mark = {
  fullName: "Mark Henry",
  mass: 68,
  height: 120,
  calBmi: function() {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  }
};
var john = {
  fullName: "John Cena",
  mass: 90,
  height: 170,
  calBmi: function() {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  }
};
console.log(john, mark);
if (john.calBmi() > mark.calBmi()) {
  console.log("john's BMI is higher than mark i.e " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log("Mark's BMI is higher than johhn i.e " + mark.bmi);
} else {
  console.log("john and mark have same bmi");
}
