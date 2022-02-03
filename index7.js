// //soal 1
// function trafficLight (lamp) {
// switch (lamp) {
//     case "red":
//     return "stop";
//     break;
//   case "yellow":
//     return "heart-heart!";
//     break;
//   case "green":
//     return "go";
//     break;
// }
// }

// console.log (trafficLight("yellow"))

// //soal 2
// const persegi = (sisi) => {
//     return sisi * sisi**2
// }

// console.log (persegi(2))

//soal 3
function array(value) {
    const result = value.map(el => {
        const newArr = ""
        return el += newArr
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result,split.join(' '))
}
array (['hallo','nama','saya',['lucky','fauzi', ['kelas',['11', ['rpl','2']]]]])

//soal 4
// const obj = {
//   nama: "lupy fadli m",
//   kelas: "rpl2",
//   umur: 17,
//   nikah: false,

//   Hp: {
//     merk: "samsung a02s",
//     spesifikasi: {
//       chipset: "snapdragon",
//       ram: "4GB",
//       rom: "64GB",
//       camera: "24Mp"
//     }
//   }
// }

// console.log(obj.Hp)