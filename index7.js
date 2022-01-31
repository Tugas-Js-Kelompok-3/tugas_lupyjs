//soal 1
function trafficLight (lamp) {
switch (lamp) {
    case "red":
    return "stop";
    break;
  case "yellow":
    return "heart-heart!";
    break;
  case "green":
    return "go";
    break;
}
}

console.log (trafficLight("yellow"))

//soal 2
const persegi = (sisi) => {
    return sisi * sisi**2
}

console.log (persegi(2))