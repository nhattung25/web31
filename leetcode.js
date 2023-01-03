// var romanToInt = function (s) {
//   let roman = 0;
//   let totalRoman = 0;
//   let arr = s.split("");

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] === "CM") {
//       roman += 900;
//       arrSplit = arr.splice(i, 2);
//     }
//     if (arr[i] + arr[i + 1] === "CD") {
//       roman += 500;
//       arrSplit = arr.splice(i, 2);
//     }
//     if (arr[i] + arr[i + 1] === "XC") {
//       roman += 90;
//       arrSplit = arr.splice(i, 2);
//     }
//     if (arr[i] + arr[i + 1] === "XL") {
//       roman += 50;
//       arrSplit = arr.splice(i, 2);
//     }
//     if (arr[i] + arr[i + 1] === "IV") {
//       roman += 4;
//       arrSplit = arr.splice(i, 2);
//     }
//     if (arr[i] + arr[i + 1] === "IX") {
//       roman += 9;
//       arrSplit = arr.splice(i, 2);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//       case "I":
//         totalRoman += 1;
//         break;
//       case "V":
//         totalRoman += 5;
//         break;
//       case "X":
//         totalRoman += 10;
//         break;
//       case "L":
//         totalRoman += 50;
//         break;
//       case "C":
//         totalRoman += 100;
//         break;
//       case "D":
//         totalRoman += 500;
//         break;
//       case "M":
//         totalRoman += 1000;
//         break;
//       default:
//         console.log("Bạn nhập sai");
//         break;
//     }
//   }
//   return (totalRoman += roman);
// };
// console.log(romanToInt("MCMXCIV"));

// var mergeTwoLists = function (list1, list2) {
//   //Object[] arr1 = list1.toArray()
//   let merList = list1.concat(Object.values(list2));
//   console.log(list1);
//   console.log(merList);
//   function compare(a, b) {
//     if (a > b) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }
//   return merList.sort(compare);
// };

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// var removeDuplicates = function (nums) {
//   let result = {};
//   let sum = 0;
//   let arr1 = [];
//   let a = 0;
//   for (let value of nums) {
//     if (value in result) {
//       result[value] += 1;
//       sum += 1;
//       a += 1;
//     } else {
//       result[value] = 1;
//       sum += 1;
//       arr1.push(value);
//     }
//   }
//   nums = arr1;
//   //   for (let i = 0; i < a; i++) {
//   //     arr1.push("_");
//   //   }
//   return nums;
// };
// console.log(removeDuplicates([1, 1, 2]));

// var searchInsert = function (nums, target) {
//   let index = nums.indexOf(target, 0);

//   if (index > -1) {
//     return index;
//   } else {
//     if (target > nums[nums.length - 1])
//       return nums.length;
//      else {
//       for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > target) return i;
//       }
//     }
//   }
// };

// console.log(searchInsert([1, 3, 5, 6], 9));

// var plusOne = function (digits) {
//   let arr1 = [];
//   let nums = digits.join("");
//   let arr = (BigInt(nums) + 1n).toString().split("");
//   for (let i = 0; i < arr.length; i++) {
//     let b = +arr[i];
//     arr1.push(b);
//   }
//   return arr1;
// };
// console.log(plusOne([9, 9]));

// var deleteDuplicates = function (head) {
//   let result = {};
//   let sum = 0;
//   let arr1 = [];

//   for (let value of head) {
//     if (value in result) {
//       result[value] += 1;
//     } else {
//       result[value] = 1;
//       sum += 1;
//       arr1.push(value);
//     }
//   }
//   return arr1;
// };
// console.log(deleteDuplicates([1, 1, 2, 3, 3]));

/*------------136. Single Number (Done)----------*/
// var singleNumber = function (nums) {
//   let obj = {};
//   for (let value of nums) {
//     if (value in obj) {
//       obj[value] += 1;
//     } else obj[value] = 1;
//   }
//   for (const nums of Object.entries(obj)) {
//     const [key, value] = nums;
//     if (value == 1) return +key;
//   }
// };
// console.log(singleNumber([1]));

/*-----------121. Best Time to Buy and Sell Stock (Done)-------- */
// var maxProfit = function (prices) {
//   var buy = prices[0] || 0;
//   //console.log(buy);
//   var profit = 0;
//   for (var i = 1; i < prices.length; i++) {
//     if (prices[i] < buy) {
//       buy = prices[i];
//     }
//     profit = Math.max(profit, prices[i] - buy);
//   }
//   return profit;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

/*-----------202. Happy Number------------ */
// var isHappy = function (n) {
//   function numSquareSum(n) {
//     var squareSum = 0;
//     while (n != 0) {
//       squareSum += (n % 10) * (n % 10);
//       n = parseInt(n / 10);
//     }
//     return squareSum;
//   }

//   let st = new Set();
//   while (1) {
//     n = numSquareSum(n);
//     if (n == 1) return true;
//     if (st.has(n)) return false;
//     st.add(n);
//     console.log(st);
//   }

// };

// console.log(isHappy(2));

var isSubsequence = function (s, t) {
  let sArr = s.split("");
  let tArr = t.split("");
  let indexArr = [];
  if (sArr == "") return true;
  else {
    for (let i = 0; i < sArr.length; i++) {
      indexArr.push(tArr.indexOf(sArr[i]));
    }
    for (let j = 0; j < indexArr.length; j++) {
      if (indexArr[j + 1] < indexArr[j]) {
        return false;
      } else return true;
    }
  }
};

console.log(isSubsequence("b", "c"));
