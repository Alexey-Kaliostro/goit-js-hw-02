//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-5");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*

Напиши функцию checkForSpam(message), 
принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли зарещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре.

*/

// Task START

const checkForSpam = function(message) {
  // твой код
  
  if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
      return true;
  }
  else {
      return false;
    }
    
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// Task END


// first solution
/*
const checkForSpam = function(message) {
  // твой код
  
  const firstSpamWord = 'sale';
  const secondSpamWord = 'spam';
  let lowerCaseString = message.toLowerCase();
  
  if (lowerCaseString.includes(firstSpamWord) || lowerCaseString.includes(secondSpamWord)) {
    message = `true`;
  }
  else {
    message = `false`;
  }
  
  return message;
};
*/