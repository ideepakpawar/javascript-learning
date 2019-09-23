var john = {
  johnBill: [124, 48, 268, 180, 42],
  tipCal: function() {
    this.tips = [];
    this.actualBill = [];
    for (var i = 0; i < this.johnBill.length; i++) {
      if (this.johnBill[i] < 50) {
        this.tips.push((this.johnBill[i] * 20) / 100);
        this.actualBill.push(this.tips[i] + this.johnBill[i]);
      } else if (this.johnBill[i] >= 50 && this.johnBill[i] < 200) {
        this.tips.push((this.johnBill[i] * 15) / 100);
        this.actualBill.push(this.tips[i] + this.johnBill[i]);
      } else {
        this.tips.push((this.johnBill[i] * 10) / 100);
        this.actualBill.push(this.tips[i] + this.johnBill[i]);
      }
    }
  }
};
john.tipCal();
console.log("john bill " + john.johnBill);
console.log("john tips " + john.tips);
console.log("john total Bill " + john.actualBill);
