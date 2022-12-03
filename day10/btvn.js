// Tím số lớn hơn
function maxOfTwo(a, b) {
  if (a > b) {
    console.log("Số lớn hơn là " + a);
  } else if (b > a) {
    console.log("Số lớn hơn là " + b);
  } else {
    console.log("Hai số bằng nhau");
  }
}
maxOfTwo(5, 2);

//Kiểm tra chẵn lẻ
function isEven(number) {
  if (number % 2 === 0) {
    console.log(number + " là số chẵn");
  } else {
    console.log(number + " là số lẻ");
  }
}

isEven(12);

//Kiểm tra số chia hết cho 3 và 5
function isDivisibleByThreeAndFive(number) {
  if (number % 15 == 0) console.log(number + " chia hết cho cả 3 và 5");
  else console.log(number + " không chia hết cho cả 3 và 5");
}

isDivisibleByThreeAndFive(3);

//Tính tiền hoa hồng
function calcCommissions(totalSalse) {
  if (totalSalse > 300)
    console.log("Hoa hồng nhận được là " + totalSalse * 0.2);
  else if (totalSalse > 100 && totalSalse <= 300)
    console.log("Hoa hồng nhận được là " + totalSalse * 0.1);
  else if (totalSalse > 0 && totalSalse <= 100)
    console.log("Hoa hồng nhận được là " + totalSalse * 0.05);
}
calcCommissions(340);

// Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
function isAlphabe(character) {
  if (
    ("a" <= character && character <= "z") ||
    ("A" <= character && character <= "Z")
  ) {
    console.log("Ký tự vừa nhập là chữ cái");
  } else {
    console.log("Ký tự không phải là chữ cái");
  }
}
isAlphabe("a");

//Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
function isUppercase(character) {
  if ("a" <= character && character <= "z")
    console.log(character + " Ký tự vừa nhập là chữ thường");
  else if ("A" <= character && character <= "Z")
    console.log(character + " Ký tự vừa nhập là chữ hoa");
  else console.log(character + " Không phải là chữ cái");
}
isUppercase("A");

/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers(number) {
  for (let x = 1; x <= number; x += 2) {
    console.log(x);
  }
}

printOddNumbers(1111);

// In dãy số chẵn

function printEvenNumbers(number) {
  for (let x = 2; x <= number; x += 2) {
    console.log(x);
  }
}
printEvenNumbers(22);

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
  let total = 0;
  for (let x = 0; x <= n; x++) {
    total += x;
  }
  console.log("Tổng các số từ 1 đến " + n + " bằng " + total);
}
sumOfNumbers(11);

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
  let total = 0;
  if (start % 2 === 0) {
    for (let x = start + 1; x <= end; x += 2) total += x;
    console.log("Tổng các số lẻ từ " + start + " đến " + end + " là " + total);
  } else {
    for (let x = start; x <= end; x += 2) total += x;
    console.log("Tổng các số lẻ từ " + start + " đến " + end + " là " + total);
  }
}

sumOfOddNumbers(0, 7);

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
  let submultiple = [];
  for (let x = 1; x <= number; x++) {
    if (number % x === 0) {
      submultiple.push(x);
    }
  }
  console.log("Ước của " + number + " là " + submultiple);
}
divisor(100);

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
  thickness *= 1000;
  let currentThickness = 0.1,
    count = 0;
  while (currentThickness < thickness) {
    currentThickness *= 2;
    count++;
  }
  console.log(count);
}

countFolding(1);

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
  let count = 0;
  while (dad / son != 2) {
    dad++;
    son++;
    count++;
  }
  console.log("Sau " + count + " năm thì tuổi cha gấp đôi tuổi con");
}

countYears(40, 20);

function countLegs() {
  let x = 1, // Số chó
    y = 36 - x; // Số gà
  while (4 * x + 2 * y != 100) {
    x++;
    y--;
  }
  console.log(x, y);
}
countLegs();

function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log(max);
}

maxOfThree(2, 2, 2);

// Tìm mùa

function reason(month) {
  switch (month) {
    case 1:
    case 2:
    case 12:
      console.log("mùa Đông");
      break;

    case 3:
    case 4:
    case 5:
      console.log("mùa Xuân");
      break;

    case 6:
    case 7:
    case 8:
      console.log("mùa Hạ");
      break;

    case 9:
    case 10:
    case 11:
      console.log("mùa Thu");
      break;

    default:
      console.log("Bạn nhập sai");
      break;
  }
}
reason(13);

//Tìm năm nhuận
function isLeafYear(year) {
  if (year % 4 == 0 || (year % 400 == 0 && year % 100 != 0)) {
    return true;
  } else return false;
}
isLeafYear(2000);

Hoặc;
function isLeafYear(year) {
  return year % 4 == 0 || (year % 400 == 0 && year % 100 != 0);
}

// Tìm số ngày trong 1 tháng

function finDayOfMonthS(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;

    case 9:
    case 11:
    case 4:
    case 6:
      return 30;

    // case 2:
    //   if (year % 4 == 0 || (year % 400 == 0 && year % 100 != 0)) return 29;
    //   else return 28;
    case 2:
      return isLeafYear(year) ? 29 : 28;

    default:
      console.log("Bạn nhập sai");
      break;
  }
}
finDayOfMonthS(2, 2001);

function calcGrade(point) {}

/**
 * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
 *
 * - Phí mở cửa cố định là `10.000đ`
 * - Giá cho `30km` đầu tiên là `11.000đ/km`
 * - Từ kilomet thứ `31` giá là `9.500đ/km`
 * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
 *
 * @param {number} km Số kilomet đã di chuyển
 *
 * @return {number} Số tiền phải trả
 */

function calcTaxiFee(km) {
  const OPEN_DOOR = 10000,
    KM30 = 11000,
    KM31 = 95000;

  let totalFee;
  if (km <= 30) {
    totalFee = OPEN_DOOR + km * KM30;
    return totalFee;
  } else {
    totalFee = OPEN_DOOR + 30 * KM30 + (km - 30) * KM31;
    return totalFee;
  }
}
calcTaxiFee(31);

// Hàm là gì
// Có 2 loại hàm: hàm tự dịnh nghĩa và hàm tự tạo
// Cú pháp: function declaration và function expression
// Local variable và global variable. Hàm thì có thể truy cập đến giá trị bên ngoài nhưng không thể truy cập vòa cá biến bên trong hàm con.
//
//

// Tìm hiểu về object (prototype: hướng đối tượng).
// Tham khảo bài tập trên mạng

var arr = new Array(1, 2, 4, 5, 9, 6);
arr[2] = 111;
console.log(arr);
