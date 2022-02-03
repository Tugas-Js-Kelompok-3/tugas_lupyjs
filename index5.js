// soal 1, 2
// const myObj = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'whale', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' },
//     { name: 'lion', likes: 'land' },
//     { name: 'nemo', likes: 'ocean' },
// ]
// const nama = myObj.map((item) => {
//     const penyimpanan = {}

//     penyimpanan [item.name] = item.likes
//     penyimpanan.totalSpecies = item.name.length * Math.floor(Math.random() * 100)

//     return penyimpanan
// })
// console.log(nama)

// const habitat = myObj.filter ((per) => {
//     return per.likes == 'ocean'
// })
// console.log(habitat)

// // map call

// //soal 3
const name = "Sastra"
const map = Array.prototype.map;

const newName = map.call(name, el => {
    return `${el}a`
})

for(let i = 4; i < newName.length; i++){
    console.log(newName[4])
}

// // no 4

// const num = [100, 25, 16, 56, 87]
// const newArr  = num.map(el => {
//     return el * 5
// });
// console.log(newArr)

// // no 5
// const num = [100, 25, 16, 56, 87]
// const newArr = num.map(el => {
//     return el -100
// });

// console.log(newArr)

// // no 6
// const num = [100, 25, 16, 56, 87]
// const newArr = num.map(el => {
//     return el +5
// });

// console.log(newArr)

// // no 7
// const num = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
// const chechknume = num.filter(el => {
//     return el > 5;
// });

// console.log(chechknume)

// // no 8 
// const num = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]
// const chechknume = num.filter(item =>{
//     return item < 6;
// })

// console.log(chechknume)

// // no 9
// const num = [1, 2 ,3 ,4 ,5, 6 ,5, 4, 7, 54, 5, 6, 7, 8, 7, 5, 5, 5, 5]
// const select = num.filter(item =>{
//     return item == 5
// })

// console.log(select)

// // no 10 
// const nama = ['lupy', 'Lupy', 'Lupy', 'fadli', 'fadli', 'Lupy', 'lupy']
// const select = nama.filter(el => {
//     return el == "Lupy"
// });

// console.log(select)