// Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi 
//và in ra kết quả. (2đ)

let str_input = prompt('Người dùng nhập vào chuỗi cần đảo ngược');
let new_str = '';
let stringLength = str_input.length;

for (let i = stringLength - 1; i >= 0; i--) {
    new_str = new_str + str_input[i];
}

console.log(new_str);