// 0. Вивести на екран
// A B C D E 
// B C D E F 
// C D E F G 
// D E F G H 
// E F G H I
for (let level = 0; level < 5; level++) {
      for (let code = 65; code <= 69; code++) {
            document.write(`${String.fromCharCode(level + code)} `)
      }
      document.write(`<br>`)
}
  
// 1. Використовуючи цикли вивести на екран 20 символів «о».
for (let i = 1; i <= 20; i++) {
   document.write(`${i} o <br>`)
      
}
alert( "B".charCodeAt())

// 20. З клавіатури вводяться n чисел та саме значення n. Написати програму, яка підраховує кількість від’ємних, додатних та нульових чисел серед введених. 
let zero = 0;
let positive = 0;
let negative = 0;
let userNumber = parseInt(prompt("number"))
for (let i = 1; i <= userNumber; i++) {
  let  number = parseInt(prompt(`ведіть ${i} число`))
   if (number===0) {
      zero++
   } else if (number > 0) {
         positive++
   }
   else if (number < 0) {
      negative++
      }
}
document.write(` zero number  ${zero} <br>`)
document.write(`positive number is ${positive} <br>`)
document.write(`negative number is ${negative} <br>`)



// 11. Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.


for (let c1 = 1; c1 <9; c1++) {
   for (let c2 = 0; c2 <=9; c2++) {
      
         if (c1 >= c2) {
               document.write(` ${c1}   ${c2}`)
         } 
   }   
}
// 11.1. Вивести на екран усі трицифрові числа, у яких перша цифра є більшою або рівною за суму другої і третьої.

for (let c1 = 1; c1 <=9 ; c1++) {
   
    for (let c2 = 0; c2 <= 9; c2++) {

          for (let c3 = 0; c3 <= 9; c3++) {
            
            if (c1> c2 + c3) {
                  document.write(`${c1} ${c2}+${c3}`)
                  console.log(c1);
            }            
      }
      }  
    
}
// 5. Інвестор вклав  тис. грн на 20 років під 20% річних. Визначити за допомогою циклів суму, яку він одержить (без оподаткування).

let money = parseInt(prompt("money"))

let sum = (20 /100 ) * money;
for (let i = 1; i <= 20; i++) {
      
money += sum
      
}
alert(money)

// 6. Інвестор вклав  тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. Визначити за допомогою циклів суму, яку він одержить.

let money2 = parseInt(prompt("money"))

let sum2 = (20 / 100) * money2;
let tax = (5/100) * money2
for (let i = 1; i <= 20; i++) {
      
money += sum2 - tax
      
}
alert(money2)

