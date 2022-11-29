/**
 * Tìm số lớn nhất trong 2 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 *
 * @return {number} Số lớn nhất
 */
function maxOfTwo(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    console.log("bằng nhau");
  }
}
maxOfTwo(1, 2);

/**
 * Kiểm tra một số là số chẵn hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isEven(number) {
  if (number % 2 === 0) {
    console.log("Số chẵn");
  } else {
    console.log("Só lẻ");
  }
}

isEven(2);

/**
 * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isDivisibleByThreeAndFive(number) {}

/**
 * Tính tiền hoa hồng mà đại lý nhận được
 *
 * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
 * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
 * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
 *
 *
 * @param {number} totalSalse Doanh số bán hàng
 *
 * @return {number} Hoa hồng trả cho đại lý
 */
function calcCommissions(totalSalse) {
  if (totalSalse > 300) return totalSalse * 0.2;
  else if (totalSalse > 100 && totalSalse <= 300) return totalSalse * 0.1;
  else if (totalSalse > 0 && totalSalse <= 100) return totalSalse * 0.05;
}
calcCommissions(250);
/**
 * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
 *
 * @param {string} character Ký tự bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isAlphabe(character) {
  if (
    ("a" <= character && character <= "z") ||
    ("A" <= character && character <= "Z")
  ) {
    console.log("ký tự vừa nhập là chữ cái");
  } else {
    console.log("Ký tự không phải là chữ cái");
  }
}
isAlphabe("a");
/**
 * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isVowel(character) {}

/**
 * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean}
 */
function isUppercase(character) {
  if ("a" <= character && character <= "z")
    console.log(character + " Ký tự vừa nhập là chữ thường");
  else if ("A" <= character && character <= "Z")
    console.log(character + " Ký tự vừa nhập là chữ hoa");
  else console.log(character + " Không phải là chữ cái");
}
isUppercase("A");
/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {}

/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {}

function test(x) {
  for (let x = 1; x <= 10; x++) {
    console.log(x);
  }
}

let x = 1;
while (x < 10) {
  x++;
  console.log(x);
}

for (let x = 1; x <= 100; x += 2) {
  console.log(x);
}

for (let x = 2; x <= 100; x += 2) {
  console.log(x);
}