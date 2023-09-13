// let userAge = parseInt(prompt("ведіть ваший вік"))
// const minUserAge = 18;

 

// if (userAge >= minUserAge) {
//     alert('Ласкаво просимо')
// } else {
//     alert('вхід заборонено')
    
// }


// cargoWeight
// weightLimit

// let cargoWeight = parseFloat(prompt("ведіт вагу вантажу"))

// const weightLimit = 12

// if (cargoWeight <= weightLimit) {
//     alert("можна")
// } else {
//     alert("неможна")
// }

//  let workerAge = parseInt(prompt("ведіть ваший вік "));

// const minAge = 32;
// const maxAge = 45;

// if (workerAge >= minAge ||  workerAge  <= maxAge   ) {
//     alert("ви приймаєтесь на роботу")
// } else {
//     alert("ви неприймаєтесь на роботу ")
// }
// let userAge = parseInt(prompt("ведіть ваший вік"));
// const edgeAge = 17;
// if (userAge<=edgeAge) {
//     if (confirm("Чи хочеш ти морозива")) {
//         alert("бережи горло")
//     } else {
//         alert("шкода")
//     }
    
// } else {
//     if (confirm("чи хочеш ти пива")) {
//         alert("купи ще чіпси")
//     } else {
//     alert("пийти чай")
        
//     }
// }
// const userName = prompt("яке ваше імя")
// const isMerried = prompt("чи ви женаті")


// const userPrefix = isMerried === "Y" ? 'Mrs' : 'Miss'

// alert(`вітаю  ${userPrefix} ${userName}`)

// кільксіь балів score
// let score = parseInt(prompt("ваша оцінка"))

// if (score === 5) {
//     alert("відміно")
    
// } else if (score === 4) {
//     alert("добре")
// } else if (score === 3) {
//     alert("задовільно")
// }
//  else if (score === 2 || score === 1) {
//     alert("такої оцінки неіснує")
// } else {
//     alert("ведено неправильно число")
// }




// let placeNum = parseInt(prompt("ведіть ваше місце"))
// let res;
// switch (placeNum) {
//     case 1:
//         res= "золота"
        
//         break;
//         case 2:
//             res= "срібло"
            
//         break;
//         case 3:
//             res= "бронза"
            
//             break;
//     default:
  
//         res= "грамота"

//         break;
// }
// alert(res)

// let tomatoColor = prompt("ведіть колір помідора")
// tomatoColor = tomatoColor.toLowerCase()
// let res;
// res
// switch (tomatoColor) {
//     case "red":
//         res="можна їсти"
//         break;
//         case "yellow":
//             res="дозріває"
//             break;
//             case "green":
//                 res="погано"
//                 break;
//     default:
//         break;
// }
// alert(res)
// let  userNameOne = prompt("перше імя дитини")
// let userNameTwo = prompt("перше імя дитини")
// let userNameOneSweets = parseFloat(prompt("скільки  у вас цукерок у 1"))
// let userNameTwoSweets = parseFloat(prompt("скільки  у вас цукерок у 2"))

// if (userNameOneSweets>userNameTwoSweets) {
//     alert(`цукерок більше у ${userNameOne}`)
// } else  if (userNameOneSweets<userNameTwoSweets){
//     alert(`цукерок більше у ${userNameTwo}`)
// } else if (userNameOneSweets === userNameTwoSweets) {
//     alert("в обох дітей одиноково цукерок")
// } else {
//     alert("сталася помилка")
// }
// let productPrice=  parseFloat(prompt("ведіть ціну товару"));
// let userMoney = parseFloat(prompt("ведіть кількість грошей"));

// if (productPrice>userMoney) {
//     alert("у вас невистачає грошей")
// } 
// else if (userMoney - productPrice >=4) {
//     alert("покупка пройшла успішно")
//     alert("чи хочете ви купити лотреїний білет ")

// } else {
//     alert("покупка пройшла успішно")
    
// }
// let guessNumber = parseInt(prompt("вгадай число"))
// let numberOne = 0;
// let numberTwo = 2;
// let a = numberOne + Math.floor(Math.random() * (numberOne + numberTwo +1  ))
// console.log(a);

// if (guessNumber === a) {
//     alert("ви вгадали число" ,a)
    
// } else {
//     let guessNumber = parseInt(prompt("у вас є що одна спроба   ведіть щераз"))
//     if (guessNumber === a) {
//         alert("ура ви вгадали з другої спроби" , a)
//     } else {
//         alert("ви програли")
//     }
// } 
// let manAge = parseInt(prompt(`введіть вік людини`));
// let whoIsThisPerson;
// if (manAge <= 6) {
//   whoIsThisPerson = `дитина у садочку`;
// } else if (manAge <= 16) {
//   whoIsThisPerson = `школяр`;
// } else if (manAge <= 21) {
//   whoIsThisPerson = `студент`;
// } else if (manAge <= 58) {
//   whoIsThisPerson = `працівник`;
// } else whoIsThisPerson = `пенсіонер`;
// alert(whoIsThisPerson);

// let UserCategiries = prompt("ведіть до якої категорії водіїв ви відноситися")
// UserCategiries = UserCategiries.toUpperCase()
// let res;
// switch (UserCategiries) {
//     case "C":
//         res="вантажний автомобіль"
//         break;
    
//     case "А":
//        res = "мотоцикл"
//         break;
//         case "B":
//         res = "вантажний"
//             break;
    
//     default:
//         break;
// }
// alert(res)
// let NumberDay =  parseInt( prompt("ведіть номер дня тижня"))

// let day;
// switch (NumberDay) {
//     case 1:
//         day = "понеділок"
//         break;
//         case 2:
//             day = "вівторок"
//         break;
//         case 3:
//             day = "середа"
//         break;
//         case 4:
//             day = "четверг"
//             break;
//             case 5:
//                 day = "пятниця"
//         break;
//         case 6:
//             day = "субота"
//         break;
//         case 7:
//             day = "неділя"
//         break;
//     default:
//         day = "таого дня тижня неіснує"
//         break;
// }
// alert(day)
// let numberMonth = parseInt(prompt("ведіть номер місяця"))
// let res;

// switch (numberMonth) {
//     case 1:
//     case 2:
//     case 3:
//         res ="зима"
//         break;
//         case 4:
//             case 5:
//             case 6:
//                 res ="весно"
//         break;
//         case 7:
//             case 7:
//             case 9:
//                 res ="літо"
//         break;
//         case 10:
//             case 11:
//             case 12:
//                 res ="зима"
//                 break;
//     default:
//         break;
// }
// alert(res)


// let monthNumber = parseInt(prompt("ведіть кількість місяців"))
// const years = Math.floor(monthNumber / 12)
// alert(years)

// let monthNumber = parseInt(prompt("ведіть кількість місяців"))
// const years = Math.ceil(monthNumber / 12)
// alert(years)
 

// const hoursNum = parseInt(prompt("кількість годин"))
// const currenthours = hoursNum % 24;
// document.write(currenthours)
// const monthNum = parseInt(prompt("кількість годин"))
// const currentMonth = (monthNum -1) % 12  + 1;
// document.write(currentMonth)

// const A = 4 + 8;
// console.log(A);

// const B = 45;

// const C = B;
// console.log(C);
// let c=7;

// let d=5;

// let a = c = d;
// console.log(a);

let d=3.5;

let c=Math.round(d);

console.log(c);
