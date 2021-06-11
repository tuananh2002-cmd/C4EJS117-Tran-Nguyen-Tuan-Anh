const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

// for (let x in product) {
//     console.log(x);
// }
//1.1 property
//1.2
for (let x in product){
    console.log(`${x}: ${product[x]}`);
}


// 2.
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};

const { subject, dueDate, assignTo } = task;



//3
//3.1.1
    movie.rate = 8.7;
    console.log(movie);
//3.1.2
    movie['rate'] += 0.5;
    console.log(movie);
//3.2
    let yourChance = prompt('What you want to update');
    let init = prompt('What is the update');
    movie[yourChance] = init;
    console.log(movie);



//4.
let yourChance = prompt('What you want to update');
let p = movie[yourChance];
if(p == undefined){
    alert(`${yourChance} does not exist in our data, we will data add new`);
    let init = prompt('Enter the new data');
    movie[yourChance] = init;
}
console.log(movie);




// 5.1.
function myPrint() {
    let str = '';
    for (let i = 0; i < 34; i++) {
        str += '-';
    }
    console.log(str);
}

for (let i = 0; i < products.length; i++) {
    myPrint();
    console.log('Name: ' + products[i].name);
    console.log('Price: ' + products[i].price);
}



