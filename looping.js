const bike = [ "Suzuki", "Honda", "Yamaha"] ;

 for (let i = 0; i < bike.length; i++) {
    //  text += bike [i] + "br";
    console.log(bike[i])
 }

 function nama (Lupy = "halo"){
     console.log (Lupy);
 }

 nama()

 function angka (num1, ...agrs){
     console.log (num1, ...agrs);
 }

 angka (1, "lupy", 2, true)

function bilanganBulat (perkalian){
    console.log(10*10)
}

bilanganBulat()

const func = (arr) => {
    return arr.join(" ")
} 
    console.log(func(["lupy", "fadli"]))
