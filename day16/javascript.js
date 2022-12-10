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
 * calcTime('20:15:45', 15); // '20:16:00'
 * calcTime('20:15:45', -46); // '20:14:59'
 */
/*
Bước 1: tách các giá trị giờ phút giây
Bước 2: Cộng số giây với n
Bước 3: Chia tổng số giây cho 60 lấy phần dư
Bước 4: Kiểm tra
Nếu số phut ==0 thì tăng số giây, ghép chuỗi kết quả rồi trả về
Nếu số phút >0 lặp lại quy trình tính số phút hoặc giờ
*/

function calcTime(time, n) {
  let timeArr = time.split(":").map(Number);
  let hour = timeArr[0];
  let minute = timeArr[1];
  let secound = timeArr[2];
  let s = timeArr[2] + n;
  let m = Math.floor(s / 60);
  timeArr[2] = s % 60;
  if (m === 0) return timeArr.join(":");
  m = timeArr[1] + m;
  let h = Math.floor(m / 60);
  timeArr[1] = m % 60;
  if (h === 0) return timeArr.join(":");
}

// function calcTime(time, n) {
//   let date = new Date(`2022-01-01 ${time}`);
//   date.setSeconds(date.getSeconds() + n);
//   return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes().padStart(2,"0"))};
// }

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

function isPalindrome(str) {}

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
function sortNumber(n) {}
