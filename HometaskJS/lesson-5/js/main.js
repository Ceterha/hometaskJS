
"use strict"
// for ( let  num = 1; num < 15; num++) {
//     document.write("hello ")
// }


// for (let i = 0; i < 5; i++) {
//    let  num1 = parseInt(prompt("num1="))
//     let num2 = parseInt(prompt("num2="))
//     if (num2 === num1) {
//         document.write(`sum = ${num1 + num2}`)
        
        
//     } else {
//         document.write(`product = ${num1 * num2}`)
        
//     }

    
// }
// let guessNumber = 0;
// for (let i = 0; i < 6 ; i++) {
//     let randomNumber = 1 + Math.floor(Math.random() * 10)
    
//     let userNum = parseInt(prompt('ведть число від 1 до 10'))

    
//     if (userNum === randomNumber) {
//     guessNumber++    
//     }

//     document.write(`user : ${userNum} <br> random : ${randomNumber} <br>`)

// }
// document.write(`випадкове число ${guessNumber}`)
// let sum = 0;

// for (let i = 1; i <= 7; i++) {
//  let productPrice = parseFloat(prompt(`price =  ${i}`))
//    sum+=productPrice   
// }
// document.write(sum) 

//  
// let total = 0;
// for (let weekNum = 1; weekNum <= 3; weekNum++) {

//     for (let dayNum = 1; dayNum <=5 ; dayNum++) {
//         let income = parseFloat(prompt(`тиждень  ${weekNum}  day ${dayNum} `))
//         total+=income
        
//     }
// }

// document.write(total)
// let correctAnswersNumber = 0;
// for (let num = 0; num < 4; num++) {
//   const num1 = 1+Math.floor(Math.random()*9)
//   const num2 = 1+Math.floor(Math.random()*9)
//     const userAnswer = parseInt(prompt(`${num1} * ${num2} = `))
//     if (userAnswer === num1 * num2) {
//         alert("ok")
//         correctAnswersNumber++
//     } else {
//         alert(`eror  correct ${num1*num2}`)
//     }
    
// }
// let  bunsNumber = parseInt(prompt("початкова кількість булочок")

// )
// while (bunsNumber>0) {
//     const clientsBunsNumber = parseInt(prompt("скілкьи булок"))
// if (clientsBunsNumber<=bunsNumber) {
//     alert(`заберіт ваші булки`)
//     bunsNumber -= clientsBunsNumber

// } else {
//     alert("вибачте але немає")
// }
// }
// let N = 2, M = 7;

// while (N<M) {
//     document.write(`${N} - ${M}`)
//     N++
//     M--
// }

// let product = 1;
// let userNumber=1;
// do {
//     product*=userNumber
//     userNumber= parseInt(prompt("number="))


// } while (userNumber !== 0);
// document.write(`product ${product}`)
// let isloggedIn = false
// for (let i = 0; i < 3; i++) {
//     const userPassword = prompt("password")
//     if (userPassword === "123") {
//         isloggedIn = true
//         break
//     } 
    
// }
// if (isloggedIn) {
//     alert("вітаю")
// } else {
//     alert(" ви невійшли")
// }
// let userMoney = parseFloat(prompt("початкова кількітсь грошей"))
// sitesLabel :for (let sitesNum = 1; sitesNum <= 3; sitesNum++) {
//     for (let productNum = 1; productNum <=2; productNum++) {
//         const productPrice =  parseFloat(prompt(`site ${sitesNum} product num ${productNum}`))
//         if (productPrice<=userMoney ) {
//             alert("nice")
//             userMoney-=productPrice
//         } 
//         if (userMoney===0) {
//             break sitesLabel ;
//         }
//     }
    
// }
// let randomNumbers = 0;

// for (let i = 0; i < 100; i++) {
    
//     let randomNumber = 1 + Math.floor(Math.random() * 1000)
   

    
// }

// Задача 0. Вивести на екран 8 кнопок з написом “Hello”.
// for (let button = 0; button < 8; button++) {
//   console.log('hello');
    
// }

// . Вивести з використанням циклів маркований список з
//  випадковими числами(1 - 100). 
// Кількість випадкових чисел вводиться користувачем.Приклад:


// let userNumber = parseInt(prompt("ведіть випадкове число"))
// for (let i = 0; i < userNumber; i++) {
//     let randomNumber = 1 + Math.floor(Math.random() * 100)
//     document.write(` випадкові цифри такі як ${randomNumber} <br>`)
    
// }


// Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)

// for (let i = 3; i <=8 ; i++) {
//    console.log(`місяць ${i}`)
    
// }
// Поступово генерувати 100 випадкових чисел від 1 до 1000.
//  Підрахувати яких чисел більше: парних чи непарних.
// let countable = 0;
// let unCountable = 0;


//    for (let i = 0; i < 100; i++) {
//     let randomNumber = 1 + Math.floor(Math.random() * 1000)

//     //    console.log(randomNumber);
//        if (randomNumber % 2 !==0) {
//             unCountable++
//        } else if (randomNumber / 2) {
//         countable++
//        }
       
//    }
// if (countable>unCountable) {
//     document.write("більше  парних <br>")
// } else {
//     document.write("більше  непарних <br>")
    
// }
//    document.write(`парних чисел ${countable} <br> а не парних ${unCountable}`)

//    Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 

// let sum = 0

// let firstNumber = parseInt(prompt("forst number"))
// let secondNumber = parseInt(prompt("second number"))
// for (let  i =  firstNumber  ;  i  < secondNumber; i++) {
//     if (i % 2 !==0) {
//         sum+=i
//     }

// }

// alert(`Сума непарних чисел між ${firstNumber} та ${secondNumber} дорівнює ${sum}`);



 //Задача. Вводиться прибуток магазину за 3 тижні
      //   (для кожного тижня вводиться прибуток за робочі дні 1-5). Знайти загальну суму

      //  загальна сума = 0
      // для кожного тижня від 1 до 3{
      //        для кожного дня у тижні від 1 до 5 {
      //ввести прибуток і додати до загальної суми
      //       }
      // }


// let totalPrice = 0;
 

// for (let weekNum = 1; weekNum <= 3; weekNum++) {
    
//     for (let dayNum = 1; dayNum <= 5; dayNum++) {
//         let income =  parseFloat(prompt(`week ${weekNum} day ${dayNum}`))
//         totalPrice+=income
//     }

// }
// alert(totalPrice)

// Приклад*. «Тренажер множення». Розробити програму, яка випадковим чином (4 рази) генерує перше число в межах від 1 до 9, друге число від 1 до 9 і перевірити чи знає користувач, чому дорівнює результат їх множення. Підрахувати кількість правильних відповідей.


// let correct = 0;

// for (let i = 1; i <= 4; i++) {
//     const numberOne = 1 + Math.floor(Math.random() * 9);
//     const numberTwo = 1 + Math.floor(Math.random() * 9);

//     let correctAnsw = numberOne * numberTwo;
//    console.log(correctAnsw);
//     let userAnswer = prompt(`${numberOne} * ${numberTwo} =`)
//     if (userAnswer == correctAnsw) {
//         alert("all good")
//         correct++
//     } else {
//         alert("bad")
//     }
    
    
// }
// document.write(correct)
// Дано 3 сайти, на яких користувач хоче купити по 2 товари. Але якщо гроші закнчились, то зрозумло, що покупка припиняється
// let userMoney = parseFloat(prompt("how much money you have"))
// let totalPice = 0 ;
// exit: for (let site = 1; site <= 3; site++) {
    
//     for (let productSite = 1; productSite <= 2; productSite++) {
//             let price =  parseFloat( prompt(` site ${site}  and product ${productSite}`))
//     totalPice+=price
//             if (totalPice>userMoney) {
//                 alert("you dont have money")
//                 break exit;
//             } 
//     }



    
    
// }






// let N = 20;
// let M = 30;
// let K = 4;

// let randomNumber = Math.floor(Math.random() * (N + M + 1))
// console.log(randomNumber);
// let user = parseInt(prompt("куда ви будете стріляти?"))


// for (let i = 0; i <= K ; i++) {
  
//     K--
// console.log(K);
//     if (user == randomNumber) {
//         alert("win")

//         break
//     } else  if(user!== randomNumber){
//         user = parseInt(prompt("куда ви будете стріляти?"))

//         if (user == randomNumber) {
//         alert("win")
//             break
//         }
     
//     }
    
//     } 
  
 

// document.write(K)
