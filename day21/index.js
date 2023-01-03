// const handleResult = function (error, data) {
//   if (error) {
//     console.log("error:", data);
//   } else {
//     console.log("got:", data);
//   }
// };

// const doSomeThing = function (callback) {
//   setTimeout(() => {
//     const data = Math.floor(Math.random() * 100);
//     if (data < 50) {
//       callback(data);
//     } else {
//       callback("không phù hợp");
//     }
//   }, 1000);
// };

let doA = async function () {
  console.log("A");
  const result = await doB();
  return result;
};

let doB = function () {
  return new Promise((resolve, reject) => {
    //executor=>trình thực thi
    console.log("B");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

let doC = function () {
  return new Promise((resolve, reject) => {
    //executor=>trình thực thi
    console.log("C");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};
//Kiểu viết của ES6
// doA()
//   .then(doB)
//   .then(doC)
//   .catch(function (reason) {
//     console.log(reason);
//   })
//   .finally(function () {}); //Finally chạy bất kể các task trước thất bại hay không
//khi doA được resolve, doB sẽ nhận kết quả từ doA

//Kiểu ES7: Async/Await =>kết hợp với try catch
try {
  const resultA = await doA();
  const resultB = await doB();
  const finalResult = await doC(resultA, resultB);
  console.log(finalResult);
} catch (err) {
  console.log("lỗi");
} finally {
}
