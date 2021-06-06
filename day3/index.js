// 1. Variable swap 
// C1:
let a = 1;
let b = 2;
let temp = a;
a = b;
b = temp;

console.log('after swap a = ', a);
console.log('after swap b = ', b);*/
// C2:
let a = 1;
let b = 2;

a = a + b;      
b = a - b;      
a = a - b;      

console.log('after swap a = ', a);
console.log('after swap b = ', b);

//2. Split String into Arraylet s = 'Hello beauty there';
let empty_rray = [];

for (let i = 0; i < s.length; i++) {
    empty_rray.push(s[i]);
}

console.log(empty_rray);

/*4. Write a script to simulate a clothes shop, 
asking and performing certain tasks from users*/

let clothes = [
    'Jeans',
    'T-Shirt', 
    'Socks',
    'Tie'
];

let user;

do {
    user = prompt('Welcome to our shop, what do you want (C, R, U, D)?');
} while (user != 'R' && user != 'C' && user != 'U' && user != 'D');

if (user == 'R') {
    for (let i = 0; i < clothes.length; i++) {
        alert(clothes[i]);
    }
}

if (user == 'C') {
    user = prompt('Enter new item:');
    clothes.push(user);
    alert(`Our items: ${clothes}`);
}
 
if (user == 'U') {
     user = prompt('Update position?');

    if (user == 1) {
        user = prompt('New item?');
        x[0] = user;
        alert(`Our items: ${x}`);
    }

    if (user == 2) {
    user = prompt('New item?');
    x[1] = user;
    alert(`Our items: ${x}`);
    }

    if (user == 3) {
    user = prompt('New item?');
    x[2] = user;
    alert(`Our items: ${x}`);
    }
}

if (user == 'D') {
    user = Number(prompt('Delete position?'));
    clothes.splice(user - 1, 1);
    alert(`Our items: ${clothes}`);
}



/*5. Viết một chương trình yêu cầu người dùng nhập vào một dãy số, dãy số được 
ngăn cách bởi dấu phẩy, tính tổng các số và hiển thị ra cho người dùng*/ 

let n = Number(prompt('nhập vào số lượng các con số'));
let array = [];

for (let i = 0; i < n; i++) {
    array[i] = Number(prompt('nhập vào các số'));
}

let sum = 0;
for (let i = 0; i < n; i++) {
    sum = sum + array[i];
}

alert('Tổng của chúng là ' + sum);


/*6. Viết chương trình yêu cầu người dùng nhập vào một dãy số, dãy số được
ngăn cách bởi dấu phẩy, tìm số nhỏ nhất và hiển thị ra cho người dùng*/

let n = Number(prompt('nhập vào số lượng các con số'));
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt('nhập vào các số'));
}

let minNumber = Math.min.apply(Math, arr);
alert(`The smallest number is ${minNumber}`);


/*7. Tạo một mảng ít nhất gồm 5 số, sau đó yêu cầu người dùng nhập vào một số,
thực hiện tìm kiếm số ở trong mảng, nếu số được tìm thấy, nói với người dùng
chỉ mục của nó ở trong mảng, nếu không tìm thấy, cũng cho họ biết như vậy*/

let arr = [3, 4, 6, -9, 10, -88, 2];
let input_of_user = Number(prompt('nhập vào một số'));
let x = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == input_of_user) {
        x = i;
    }
}

if (x != 0) {
    alert(input_of_user + ' is found in my array at index ' + x);
} else {
    alert(input_of_user + ' is NOT found in my array');
}


/*10. Viết chương trình yêu cầu người dùng nhập vào danh sách tên, 
ngăn cách nhau bởi dấu phẩy, tạo một mảng mới chứa các tên, 
mỗi tên được bao quanh bởi cặp dâu <>.*/

let n = null;
let arr = [];
let newArr;

while(true) {
    n = Number(prompt('nhập vào số lượng tên?'));
    if (n) {
        for (let i = 0; i < n; i++) {
            arr[i] = prompt('nhập vào tên?');
        }

        newArr = [];

        for (let i = 0; i < n; i++) {
            arr[i] = '<' + arr[i] + '>';
            newArr.push(arr[i]);
        }

        alert(newArr);
        break;
    }
    else {
        alert('bạn vui lòng nhập đúng theo yêu cầu!');
    }
};



/*11.Viết chương trình yêu cầu người dùng nhập vào một dãy số,
được ngăn cách bởi dấu phẩy. Tạo một mảng mới chỉ bao gồm những số lẻ*/




let n = Number(prompt('nhập vào độ dài của dãy số'));
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt('nhập vào dãy số'));
}

let oddNumbers = []; 

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 != 0) {
        oddNumbers.push(arr[i]);
    }
}

alert(oddNumbers);


//Bài 8  

let sizes_of_sheepflock = [5, 7, 300, 90, 24, 50, 75];
alert(`Xin chào, tôi là Tuấn Anh và đây là kích thước đàn cừu của tôi\n
${sizes_of_sheepflock}`);

let biggest_sheep = Math.max.apply(Math, sizes_of_sheepflock);
alert(`Bây giờ con cừu lớn nhất của tôi có kích thước
${biggest_sheep}, hãy cạo lông cho nó nào!`);

/*for (let i = 0; i < sizes_of_sheepflock.length; i++) {
    if (sizes_of_sheepflock[i] == biggest_sheep) {
        sizes_of_sheepflock[i] = 8;
    }
}*/
let default_size = sizes_of_sheepflock.indexOf(biggest_sheep);
sizes_of_sheepflock[default_size] = 8;


console.log('Sau khi cạo lông, đây là kích thước đàn cừu của tôi');
console.log(...sizes_of_sheepflock);

let i = 1;
let n = Number(prompt('nhập vào số tháng?'));
while(i <= n) {
    for (let j = 0; j < sizes_of_sheepflock.length; j++) {
        sizes_of_sheepflock[j] += 50;
    }
    console.log(`Sau ${i} tháng, đàn cừu của tôi có kích thước`);
    console.log(...sizes_of_sheepflock);

    biggest_sheep = Math.max.apply(Math, sizes_of_sheepflock);

    console.log(`Bây giờ con cừu lớn nhất của tôi có kích thước 
    ${biggest_sheep}, hãy cạo lông cho nó nào!`);

    /*for (let i = 0; i < sizes_of_sheepflock.length; i++) {
        if (sizes_of_sheepflock[i] == biggest_sheep) {
            sizes_of_sheepflock[i] = 8;
        }
    }*/

    default_size = sizes_of_sheepflock.indexOf(biggest_sheep);
    sizes_of_sheepflock[default_size] = 8;

    console.log('Sau khi cạo lông, đây là kích thước đàn cừu của tôi');
    console.log(...sizes_of_sheepflock);
    i++;
}

let sum_of_sheeps = 0;

for (let i = 0; i < sizes_of_sheepflock.length; i++) {
    sum_of_sheeps += sizes_of_sheepflock[i];
}

alert(`Đàn cừu của tôi có tổng kích thước là: ${sum_of_sheeps}`);
alert(`Tôi nhận được ${sum_of_sheeps * 2}`);




