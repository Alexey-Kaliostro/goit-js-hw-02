//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-1");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Напиши функцию logItems(array), 
которая получает массив и использует цикл for, 
оторый для каждого элемента массива будет выводить в консоль сообщение в формате 
[номер элемента] - [значение элемента].

Нумерация должна начинаться с 1. 
К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
*/

// Task START

const logItems = function(array) {
  // твой код

  let ordererdList = "";

  for (let i = 0; i < array.length; i++){
    ordererdList += `${i + 1} - ${array[i]}\n`;

    

  }
  console.log(ordererdList);
  

};

//Task END

console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");