//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-6");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. 
Если хочешь, в случае некорректного ввода, показывай alert с текстом 
'Было введено не число, попробуйте еще раз', 
при этом результат prompt плюсовать к общей сумме не нужно, 
после чего снова пользователю предлагается ввести число в prompt.

*/

// Task START

let input;
let total = 0;

do {
  input = prompt(`Enter number`);





if (Number.isInteger(Number(input))){

  total += Number(input);
} else {
  alert(`Было введено не число, попробуйте еще раз`);
  
  }
  
} while (input !== null);


alert(`Общая сумма чисел равна ${total}`)


// Task End





// Test code


/*

while (true) {

if (input === null || input === NaN){
        
 break;

 }  

    input = prompt(`Enter number`);
    total += Number(input);

}  alert(total);


*/


/*
while (total >= 0) {
    input = prompt(`Введите число`);
   
    total += input;
}  if (input != Number || input === null){
    
}alert(`Общая сумма чисел равна ${total}`);

*/
/*
input = Number(prompt(`Введите число`));
console.log(typeof(input));
*/


/*
do {
    input = Number(prompt(`Введите число`));
} while (input > 0 || input < 0);


if (Number.isInteger(input)) {
    input++;
    total = input;
    
} console.log(total);*/


/*
do {
    input = Number(prompt(`Введите число`));
} while (input > 0 || input < 0) {
    total += input;
} console.log(input);

*/