/**
 * Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * - Từ kWh thứ 0 đến 50: 1678đ/kWh
 * - Từ kWh thứ 51 - 100: 1734đ/kWh
 * - Từ kWh thứ 101 - 200: 2014đ/kWh
 * - Từ kWh thứ 201 - 300: 2536đ/kWh
 * - Từ kWh thứ 301 - 400: 2834đ/kWh
 * - Từ kWh thứ 401 trở đi: 2927đ/kWh
 *
 * @param {number} kwh - Số điện đã dùng trong tháng
 *
 * @return {number} Tiền điện phải trả
 *
 * @example
 * bill(100); // 170600
 */

/*
Bước 1: Khai báo hằng số là các mức giá bậc thang
Bước 2: Xét trường hợp số điện tiêu thụ thuộc mức nào, tính tiền và return ra giaTien
*/

function bill(kwh) {
  const MUC1 = 1678;
  const MUC2 = 1734;
  const MUC3 = 2014;
  const MUC4 = 2536;
  const MUC5 = 2834;
  const MUC6 = 2927;

  let giaTien;
  if (kwh <= 0) console.log("Bạn nhập sai");
  if (0 < kwh <= 50) {
    giaTien = MUC1 * kwh;
  }
  if (51 <= kwh <= 100) {
    giaTien = MUC2 * (kwh - 50) + MUC1 * 50;
  }
  if (101 <= kwh <= 200) {
    giaTien = MUC3 * (kwh - 100) + MUC2 * 50 + MUC1 * 50;
    return giaTien;
  }
  if (201 <= kwh <= 300) {
    giaTien = MUC4 * (kwh - 200) + MUC3 * 100 + MUC2 * 50 + MUC1 * 50;
    return giaTien;
  }
  if (301 <= kwh < 401) {
    giaTien =
      MUC5 * (kwh - 300) + MUC4 * 100 + MUC3 * 100 + MUC2 * 50 + MUC1 * 50;
    return giaTien;
  } else
    giaTien =
      MUC6 * (kwh - 400) +
      MUC5 * 100 +
      MUC4 * 100 +
      MUC3 * 100 +
      MUC2 * 50 +
      MUC1 * 50;
  return giaTien;
}

console.log(bill(100));

/**
 * Cho một chuỗi time biểu thị thời gian dạng giờ:phút:giây (VD:
'20:15:45'), và một số n bất kỳ, tính và trả về kết quả là một chuỗi
biểu thị thời gian tương ứng sau n giây
 *
 * @param {string} time - Chuỗi biểu thị thời gian
 * @param {number} n - Số giây cần thêm (bớt)
 *
 * @return {string} Kết quả
 *
 * @example
//  * calcTime('20:15:45', 15); // '20:16:00'
//  * calcTime('20:15:45', -46); // '20:14:59'
//  */
// function calcTime(time, n) {
//   const today = new Date(time);
//   const tomorrow = new Date();
//   tomorrow.setDate(today.getDate() + n);
//   console.log(tomorrow);
// }
// calcTime("2022-12-22 20:15:45", 15);

/**
 * Kiểm tra một chuỗi có phải đối xứng hay không (viết xuôi hay viết
ngược đều giống nhau, không phân biệt chữ hoa chữ thường và không tính
dấu cách)
 *
 * @param {string} str - Chuỗi bất kỳ
 *
 * @return {boolean} Kết quả
 *
 * @example
 * isPalindrome('Race car'); // true, vì Race car = racecar = racecar
 */
/*
Bước 1: Đổi chuỗi nhập vào sang kiểu mảng(arr1), trong đó có dùng toLowerCase() để đổi chuỗi về chữ thường nếu có.
Bước 2: Tạo 1 mảng mới (arr2) là đảo ngược của mảng đầu tiên bằng slice() và reverse() để không làm thay đổi mảng ban đầu.
Bước 3: Dùng hàm for để so sánh các phần tử trong mảng. Nếu có bất kì giá trị nào của arr1 mà khác arr2 tương ứng thì trả về true và ngược lại

*/

function isPalindrome(str) {
  let arr1 = Array.from(str.toLowerCase().toString());
  let arr2 = arr1.slice().reverse();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else return true;
  }
}
isPalindrome("Race car");

/**
 * Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo
được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì
ốc sên sẽ leo lên tới miệng giếng
 *
 * @param {number} h - Chiều cao của giếng (h > 0)
 * @param {number} x - Số mét leo được vào ban ngày (x > y)
 * @param {number} y - Số mét bị tụt xuống vào ban đêm (y > 0)
 *
 * @return {number} Số ngày cần để ốc sên leo lên được miệng giếng
 *
 * @example
 * snail(10, 3, 1); // 5
 */

/*
Bước 1: Khai báo các biến: velocity là khoảng cách con ốc bò được trong 1 ngày, 
day là số ngày con ốc cần bò, night là số đêm con ốc cần bò.
Bước 2: Gán các giá trị cho biến: khoảng cách con ốc bò trong 1 ngày bằng khoảng cách bò trừ khoảng cách tụt,
số ngày con ốc cần bò thì lấy chiều cao h( không tính 1 ngày đầu tiên) chia cho vận tốc bò +1.
số đêm bằng số ngày trừ 1. 
*/
function snail(h, x, y) {
  let velocity = x - y;
  let day = (h - x) / (x - y) + 1;
  let night = day - 1;
  console.log(
    "Con ốc cần " + day + " ngày và " + night + " đêm để bò lên giếng"
  );
  return day;
}
console.log(snail(10, 3, 2));

/**
 * Sắp xếp các chữ số trong một số nguyên dương bất kỳ để tạo ra số nhỏ
nhất (giữ nguyên số chữ số ban đầu, bao gồm cả số 0)
 *
 * @param {number} n - Số nguyên dương bất kỳ
 *
 * @return {number} Số nhất nhất sau khi sắp xếp các chữ số
 *
 * @example
 * sortNumber(5307510); // 1003557
 */

/*
Bước 1: Tạo hàm so sánh 2 số
Bước 2: chuyển  số sang chuỗi rồi sang mảng
Bước 3: Dùng phương thức sort(compare) để sắp xếp mảng tăng dần
Bước 4: đổi mảng sang chuỗi  rồi sang số sử dụng phương thức join và new Number
*/
function sortNumber(n) {
  function compare(a, b) {
    // Trả về 1 nếu a lớn hơn b, trả về -1 nếu a < b
    if (a > b) return 1;
    else return -1;
  }
  let arr = Array.from(n.toString());
  arr.sort(compare);
  let min = new Number(arr.join(""));
  console.log(min);
}
sortNumber(5307510);
