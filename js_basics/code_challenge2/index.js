var johnTeam = [87, 130, 104];
var mikeTeam = [87, 130, 104];
var johnSum = 0;
var mikeSum = 0;
for (var i = 0; i < johnTeam.length; i++) {
  johnSum += johnTeam[i];
}

for (var i = 0; i < mikeTeam.length; i++) {
  mikeSum += mikeTeam[i];
}

//var result = johnSum / 3 > mikeSum / 3 ? "john team won" : "mike team won";

switch (true) {
  case johnSum / 3 > mikeSum / 3:
    console.log("john team won");
    break;
  case johnSum / 3 < mikeSum / 3:
    console.log("mike team won");
    break;
  default:
    console.log("draw");
}
