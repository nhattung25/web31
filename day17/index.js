function isTable(node) {
  return node.tagName === "TABLE";
}
const table = Array.from(document.body.children).find(isTable);

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  rows[i].cells[i].style.backgroundColor = "red";
  rows[i].rows[length - i - 1].style.backgroundColor = "red";
}

/**
 * Tổng kết
 * Môi trường chạy mã và thực thi mã trong trình duyệt cung cấp cho mình một số API(các đối tượng BOM,DOM) để làm việc/thao tác với cửa sổ trình duyệt, với nội dung hiển thị
 * Cấu trúc phân cấp đối tượng:
 * + Node(tất cả mọi thứ đều là node
 * + document cũng là một node
 * + Element: chỉ bao gồm các Node là thẻ HTML (h1,h2..)
 * + Mỗi thẻ HTML có 1 Interface riêng, mô tả các thuộc tính và phương thức riêng của nó VD HTMLTableElement, HTMLImageElement..
 * + Note list và HTML collection (kết qur trả về cảu một số thuộc tính/phương thức tìm kiếm phần tử) không phải là mảng, chỉ có thể duyệt qua vòng lặp for, hoặc chuyển thành mảng thông qua Array.from
 * 
 * 
 * 
 * Note: Cần ghi nhớ các khái niệm cở bản DOM, BOM, window, Node, Element, ChildNodes
 * Thực hành 1 số thuộc tính đặc biệt: innerHTML,textContent
 * Một số thuộc tính đặc biệt trong document: document.head, document.title, document.body, document.links
 * 
 * 
 * 
 *
 */
