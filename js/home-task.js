// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let totalSum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     //console.log(i);
//     totalSum += i;
//   }
//   return totalSum;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotal(1)); //возвращает 1.
// console.log(calculateTotal(3)); //возвращает 6.
// console.log(calculateTotal(7)); //возвращает 28

//задача 20 модуль 2

// function calculateTotalPrice(order) {
//   let total = 0;
//   let arr = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < order.length; i += 1) {
//     arr = order[i];
//     //console.log(arr);
//     total += arr;
//   }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //возвращает 138.
// console.log(calculateTotalPrice([164, 48, 291])); //возвращает 503.
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает 1116.
// console.log(calculateTotalPrice()); //со случайным массивом возвращает правильное значение.

// задача 21 модуль 2
function findLongestWord(string) {
  // Пиши код ниже этой строки
  let arr = string.split(' ');
  let stringMaxWidth = 0;
  let responseIndex;
  for (let i = 0; i < arr.length; i += 1) {
    if (stringMaxWidth < arr[i].length) {
      stringMaxWidth = arr[i].length;
      responseIndex = i;
    }
  }
  return arr[responseIndex];
  // Пиши код выше этой строки
}

console.log(findLongestWord('The quick brown fox  jumped over the lazy dog')); // возвращает jumped.
console.log(findLongestWord('Google do a roll')); // возвращает Google.
console.log(findLongestWord('May the force be with you')); // возвращает force.
