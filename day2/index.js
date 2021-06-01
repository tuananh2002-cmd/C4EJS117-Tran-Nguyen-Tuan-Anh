//  Bài 1:
    // 1.1
    // var và const là 2 từ khóa trong javascript dùng để khai báo biến

    // 1.2 và 1.3
    /* khai báo kiểu var là phạm vi toàn cục hoặc phạm vi hàm trong khi let
    là phạm vi cục bộ. Biến được khai báo bằng var có thể khai báo lại và 
    cập nhật lại giá trị trong khi biến được khai báo bằng let thì ko thể
    khai báo lại nhưng vẫn cập nhật được giá trị */

    /* biến được khai báo bằng let có thể được cập nhật lại giá trị trong khi 
    biến được khai báo bằng const thì không. let có thể được khai báo mà không được
    khởi tạo, const phải được khởi tạo trong quá trình khai báo */

    // example code:
    /* biến hello được khai báo bằng var và nằm trong phạm vi hàm nên
    không thể truy xuất biến hello */ 

    var tester = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined

    /* biến greeter được khai báo bằng var có thể khai báo lại và 
     cập nhật lại giá trị */

    var greeter = "hey hi";
    var greeter = "say Hello instead";

    /* biến hello được khai báo bằng let nằm trong phạm vi khối và cũng không
    truy xuất được như var */

    let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);//"say Hello instead"
    }
   console.log(hello) // hello is not defined

    // biến greeting được khai báo bằng let không thể khai báo lại như var

    let greeting = 'say Hi';
    let greeting = "say Hello instead";
    //error: Identifier 'greeting' has already been declared

    /* biến greeting được khai báo bằng const không thể cập nhật lại giá trị
    cũng như khai báo */

    const greeting = "say Hi";
    greeting = "say Hello instead";//error : Assignment to constant variable. 

    /* trong khi một đối tượng được khai báo bằng const không thể cập nhật
    nhưng các thuộc tính thì có thể */

    const greeting = {
        message : "say Hi",
        times : 4
    }

    greeting.message = "say Hello instead"; 
    // Điều này sẽ cập nhật giá trị của greeting.message mà không trả lại lại lỗi
    
//  Bài 2:
   // 2.1 
   // Boolean là một trong những kiểu dữ liệu nguyên thủy trong Javascript,
   //nó chỉ cho phép biến mang 2 giá trị true (ĐÚNG) hoặc false (SAI).
   // 2.2
   // kết quả boolean là true hoặc false

// Bài 3:
    // a) 
    // in ra màn hình dãy số từ 0 đến 7
    for (let i = 0; i < 7; i++) {
        console.log(i);
    } 

    // b)
    // in ra màn hình n số bắt đầu từ 0 với n được người dùng nhập từ bàn phím 
    let n = Number(prompt('nhap n'));
    for (let i = 0; i < n; i++) {
        console.log(i);
    } 

    // c) 
    // một dãy số bắt đầu bằng 3, kết thúc trước n, n được nhập từ bàn phím
    let n = Number(prompt('Nhap n')) 
    for (let i = 3; i < n; i++) {
        console.log(i);
    } 
    
    // d)
    // một dãy số bắt đầu bằng c, kết thúc trước n, c và n được nhập từ bàn phím
    let c = Number(prompt('Nhap c'));
    let n = Number(prompt('Nhap n'));
    for (let i = c; i < n; i++) {
        console.log(i);
    } 
     
    // e)
    /* một dãy số bắt đầu bằng c, kết thúc trước n, nhảy 3 bước, c và n được nhập
    vào từ bàn phím */
    let c = Number(prompt('Nhap c'));
    let n = Number(prompt('Nhap n'));
    for (let i = c; i < n; i += 3) {
        console.log(i);
    } 

    // f)
    /* một dãy số bắt đầu bằng c, kết thúc trước n, nhảy s bước và s, c, n
    được nhập từ bàn phím */
    let c = Number(prompt('Nhap c'));
    let n = Number(prompt('Nhap n'));
    let s = Number(prompt('Nhap s'));

    for (let i = c; i < n; i += s) {
        console.log(i);
    } 

    // Bài 4: Viết chương trình tính giai thừa của n với n được nhập từ bàn phím
    let n = Number(prompt('Nhap vao n')) 
    let factorial = 1;
    let i = n;

    while (i >= 1) {
        factorial *= i;
        i--;
    }

    alert(`The factorial of ${n} is ${factorial}`); 

    /* Bài 5: Viết chương trình hỏi người dùng tuổi của họ, sau đó xét xem
    họ có đủ tuổi để xem nội dung 14+ hay không */

    let age_of_users = Number(prompt('Người dùng nhập tuổi của mình'));

    if (age_of_users > 0 && age_of_users < 14) {
        alert('Bạn không đủ tuổi để xem nội dung này');
    } 
    else if (age_of_users >= 14) {
        alert('Bạn đủ tuổi để xem nội dung này');
    }
    else {
        alert('Vui long không nhập số 0, số âm hay ký tự!');
    } 

    /*Bài 6: Viết chương trình hỏi người dùng nhập vào một số x, sau đó kiểm tra
    x thuộc nửa trên hay nửa dưới của đoạn từ 0 đến 9 */

    let x = Number(prompt('Nhập vào x'));

    if (x > 9/2 && x <= 9) {
        alert(`${x} thuộc nửa trên của 9`);
    } 
    else if (x < 9/2 && x >= 0) {
        alert(`${x} thuộc nửa dưới của 9`);
    }
    else if (x < 0 || x > 9 || x == 9/2) {
        alert(`${x} không thuộc nửa trên và nửa dưới của 9`)
    }
    else {
        alert('Người dùng nhập một số trong đoạn từ 0 đến 9');
    } 

    /* Bài 7: Viết chương trình bảo người dùng nhập hai số x và n, sau đó
    kiểm tra xem x thuộc nửa trên hay nửa dưới của n */

    let x = Number(prompt('Nhap x'));
    let n = Number(prompt('Nhap n'));

    if (x >= 0 && x < (n/2)) {
        alert(`${x} thuộc nửa dưới của ${n}`);
    }
    else if (x > (n/2) && x <= n) {
        alert(`${x} thuộc nửa trên của ${n}`);
    }
    else if (x < 0 || x > n || x == n/2) {
        alert(`${x} không thuộc nửa trên và nửa dưới của ${n}`);
    }
    else {
        alert('Người dùng không nhập chữ cái hay ký tự đặc biệt!');
    } 

    /* Bài 8: Viết chương trình kiểm tra xem x là số chắn hay số lẻ, x được
    nhập từ bàn phím */

    let x = Number(Math.round(prompt('Nhập một số')));

    if (x % 2 == 0) {
        alert(`${x} là số chẵn`);
    }
    else {
        alert(`${x} là số lẻ`);
    } 
    
    // Bài 10: Viết chương trình tính chỉ số BMI của một người
  
    let weight = null, height = null;
    
    do {
        weight = Number(prompt('Your weight in kg?'));
        height = Number(prompt('Your height in cm?'));
    } while (weight <= 0 || height <= 0);

    let height_in_meter = height / 100;
    let BMI = weight / (height_in_meter * height_in_meter);

    if (BMI < 16) {
        alert(`Your BMI is ${BMI}`);
        alert('You are Severely underweight');
    }
    else if (BMI >= 16 && BMI < 18.5) {
        alert(`Your BMI is ${BMI}`);
        alert('You are underweight');
    }
    else if (BMI >= 18.5 && BMI < 25) {
        alert(`Your BMI is ${BMI}`);
        alert('You are normal');
    }
    else if (BMI >= 25 && BMI < 30) {
        alert(`Your BMI is ${BMI}`);
        alert('You are overweight');
    }
    else if (BMI >= 30) {
        alert(`Your BMI is ${BMI}`);
        alert('You are obese');
    }
    else {
        alert('Người dùng không nhập chữ cái hay ký tự đặc biệt!');
    } 



    // Bài 9: Viết chương trình in ra 
    // a) 6 L’s and H’s, half L’s, half H’s

        for (let i = 1; i <= 6; i++) {
            if (i <= 6/2) {
                console.log('L');
            }
            else {
                console.log('H');
            }
        } 

    // b) n L’s and H’s in total, n entered by user

    let n = Number(prompt('nhập n: '));
    let a = Math.ceil(n/2);

    for (let i = 1; i <= n; i++) {
        if (i <= a) {
            console.log('L');
        }
        else {
            console.log('H');
        }
    } 


    // c) 8 1’s and 0’s in total, consecutively

    for (let i = 1; i <= 8; i++) {
        if (i <= 8/2) {
            console.log(0);
            console.log(1);
        }
    } 


    // d) n 1’s and 0’s in total, consecutively, n entered by user

    let n = Number(prompt('Nhập n'));

    for (let i = 1; i <= n; i++) {
        if (i <= n/2) {
            console.log(0);
            console.log(1);
        }
    }

    if (n % 2 != 0){
        console.log(0);
    }
    

    