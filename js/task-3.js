//=-==-=-=-=--=-=-=-=-=-=-=-=-=-===-
console.log(" ");
console.log("Task-3");
console.log(" ");
//=-=-=-==-=-=-=-=-=-=-=-==-=-=-=-=-

/*
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
*/

// Task START

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt(`PLease enter your password`);

if (password === null) {
    message = `Отменено пользователем!`;
}

else (message = password === ADMIN_PASSWORD ? "Добро пожаловать!" : "Доступ запрещен, неверный пароль!");
   
alert(message);
console.log(`${message}\n Обновите страницу для перезапуска скрипта ввода пароля`);

// Task END
console.log(" ");
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");