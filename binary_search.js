/*
    Данный код был написан благодаря прекрасной книги Адитьи Бхаргавы "Грокаем Алгоритмы"
    Именно с него я и начал свое знакомство с непростым миром алгоритмов

    Данный алгоритм был написан с использованием JS ,есть/будет также версия на питоне

    В книге автор приводит очень хороший пример работы данного поиска:

    Предположим,что ваша подруга загадала некое число,и вам нужно отгадать какое именно.
    Вы называете первое число:

    Вы: - 50!
    Она: - много.
    
    Ага,значит все числа больше 50 отпадают, т.е мы сокращаем количество вариантов где-то наполовину.Отлично!
    Вы снова называете число, действуя по схожей стратегии,но уже в диапазоне (0 - 49)

    Вы: - 25!
    Она: - мало.

    Чудненько,теперь вы знаете,что числа до 25 отпадают и нужно искать в диапазоне 26-49.Мы сократили поиски вдвое!
    Продолжаем:

    Вы: - 38!
    Она: - много

    Теперь отпадают числа 38-50. Остаются 26-37
    Продолжаем:

    Вы: - 32!
    Она: - мало

    Остается 26-32:

    Вы: - 3!
    Она: - да.Верно!

*/

// list - отсортированный массив, item - искомый паттерн
function binarySearch(list, item) {
  // Границы той части списка,в которой мы выполняем поиск.
  // Например,если книга состоит из 100 стр,то поиск будет выполняться между 0(low) и 100(high) страницей
  let low = 0;
  let high = list.length - 1;
  //Цикл поиска будет выполняться до тех пор,пока не останется 1 элемент
  while (low <= high) {
    //А пока он не найден,мы будем проверять средний элемент
    let mid = Math.floor((low + high) / 2); //Возвращает целый остаток деления --> 5/2 = 2
    let guess = list[mid]; // Наше предположение
    if (guess === item) {
      // Значение найдено
      return mid; // Возвращаем индекс
    }
    if (guess > item) {
      high = mid - 1; // Пример: Диапазон 0-10. Предп - 5, значение - 4. т.е нужно искать в диапазоне 0 - (5-1)
    } else {
      low = mid + 1; // Пример: Диапазон 0-10. Предп - 5, значение - 6. т.е нужно искать в диапазоне (5+1) - 10
    }
  }
  return null; // Или return null;
}

//Проверка

//ВНИМАНИЕ! Массив обязательно должен быть отсортирован!
const testArrayRU = [1, 2, 3, 23, 34, 56, 65, 78];
const test1Ru = binarySearch(testArrayRU, 23); // 3
const test2Ru = binarySearch(testArrayRU, 13); // null

//Вывод в консоли
console.log(`This element has index: ${test1Ru}`);
console.log(`This element has index: ${test2Ru}`);
