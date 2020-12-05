//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-3");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Напиши фукцнию findLongestWord(string), 
которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы)
и возвращает самое длинное слово в этой строке.
*/

// Task START

const findLongestWord = function(string) {
  // твой код
  
  let wordList = string.split(" ");
  let longestWord = wordList[0];
  
  for (word of wordList) {
    if (word.length > longestWord.length) {
      longestWord = word;

    }
    
  } 
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

// Task END
console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");