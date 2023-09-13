"use strict"
// // задачі 0

//  let numberOne = parseInt(prompt("ведіть перше число"));

//  let numberTwo = parseInt(prompt("ведіть друге число"));
// let numberThree = parseFloat(prompt("ведіть трете число"))



// // const sum = numberOne + 12 + numberTwo;
// // alert(sum)

// // const sum =   Math.sqrt((numberOne + numberTwo) / (2 * numberOne))



// // alert(sum.toFixed(2))


// // const sum = (numberOne + numberTwo) *  numberThree
// // alert(Math.cbrt(sum))

// // const sum = Math.sin(numberOne / (-numberTwo))
// // alert(sum)



// задача 1 

// const sum = numberTwo + numberOne;

// const product = numberTwo * numberOne;
// const fraction = numberOne / numberTwo;


// document.write(sum )
// document.write(product)
// document.write(fraction)

// задача 2
// let wasBorn = parseInt(prompt("ведіть дату народження"))

// const year = 2023
// const userAge  = year - wasBorn
// document.write(userAge)
// задача 3 
// let productItems = parseInt(prompt("ведіть кількість товару"));

// let productPrice = parseFloat(prompt("ведіть ціну товару"));
// const VAT  = 5;
// const totalConst = productItems * productPrice;
// const valueVat = (totalConst * VAT) / 100
// alert(valueVat)

// задача 4 

// let lengthCm = parseFloat(prompt("ведіть довжину в сантиметрах"))

// const lengthKm = lengthCm / 1000;
// const lengthM = lengthCm / 100;



// alert(lengthKm)

// alert(lengthM)
// let second = parseFloat(prompt("ведіть кількість секунд"))

// const minutes = second / 60;

// const hours = second / 3600;
// alert(`кількість хвелин  ${minutes}`  )
//  alert(`кількість годни   ${ hours.toFixed(2)}` )

// let productPrice = parseFloat(prompt("ведіть вартість товару"))
// let productOne =  parseInt(prompt("ведіть кількість одиниць першого  товару"))
// let productTwo =  parseInt(prompt("ведіть кількість одиниць  другого товару"))
// let productThree = parseInt(prompt("ведіть кількість одиниць  третього товару"))


// const productPriceOne = productPrice * productOne;
// const productPriceTwo = productPrice * productTwo;
// const productPriceThree = productPrice * productThree;

// const total = productPriceOne + productPriceTwo + productPriceThree;

// alert(`загальна сума першого товару ${productPriceOne}`)
// alert(`загальна сума  другого товару ${productPriceTwo}`)
// alert(`загальна сума  третього товару ${productPriceThree}`)
// alert(`загальна сума  всього товару ${total}`)

// let randomPlaceOne = 1;
// let randomPlaceTwo = 12;
// let a = randomPlaceOne + Math.floor(Math.random() * (randomPlaceOne + randomPlaceTwo + 1))
// alert(a)
let numberOne = 0;
let numberTwo = 6;
let a = numberOne + Math.floor(Math.random() * (numberOne + numberTwo +1  ))

console.log(a)


