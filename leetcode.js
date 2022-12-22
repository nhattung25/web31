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

var plusOne = function (digits) {
  let arr1 = [];
  let nums = digits.join("");
  let arr = (BigInt(nums) + 1n).toString().split("");
  for (let i = 0; i < arr.length; i++) {
    let b = +arr[i];
    arr1.push(b);
  }
  return arr1;
};
console.log(plusOne([9, 9]));

var deleteDuplicates = function (head) {
  let result = {};
  let sum = 0;
  let arr1 = [];

  for (let value of head) {
    if (value in result) {
      result[value] += 1;
    } else {
      result[value] = 1;
      sum += 1;
      arr1.push(value);
    }
  }
  return arr1;
};
console.log(deleteDuplicates([1, 1, 2, 3, 3]));
