//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-4");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Напиши функцию formatString(string) 
которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает 40 символов, 
функция возвращает ее в исходном виде.
Если длина больше 40 символов, 
то функция обрезает строку до 40-ка символов 
и добавляет в конец строки троеточие '...', 
после чего возвращает укороченную версию.

*/

// Task START

const formatString = function(string) {
  // твой код
  const maxChar = 40;

  const formatString = string.length <= 40 ? string : `${string.slice(0, 40)}...`;
  return formatString;



  // first solution
 /* if (string.length <= maxChar) {
    return string;

  } else if (string.length > maxChar);
  return `${string.slice(0, 40)}...`;*/

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

// Task END
console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");