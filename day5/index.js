// // 1.1.
// console.log(Math.random());

// // 1.2.
// const arr = [2 5 6 9 10];
// console.log(arr[Math.floor(Math.random() * arr.length)]);

// // 1.8.
// const struct = [
//     {
//         question: "How many legs does an octopus have?"
//         choices: ['4 legs' 'no legs' '8 legs' '2 legs']
//         rightChoice: '2 legs'
//     }
//     {
//         question: "Which country is home to kangaroos?"
//         choices: ['Australia' 'Austria' 'New Zealand' 'US']
//         rightChoice: 'Australia'
//     }
//     {
//         question: "What sweet food made by bees using nectar from flowers?"
//         choices: ['Bread' 'Honey' 'Sugar' 'Potent']
//         rightChoice: 'Honey'
//     }
//     {
//         question: "What frictional detective lived at 221b Baker Street?"
//         choices: ['Watson' 'Sam Spade' 'Scoobidoo' 'Sherlock Holmes']
//         rightChoice: 'Sherlock Holmes'
//     }
// ];

// function randomPick(arr) {
//     let alreadyPicked = [];
//     let newArr = [];
//     while (true) {
//         let i = Math.floor(arr.length * Math.random());
//         if (!(alreadyPicked.includes(i))) {
//             newArr.push(arr[i]);
//             alreadyPicked.push(i);
//         } if (arr.length == alreadyPicked.length) {
//             break;
//         }
//     }
//     return newArr;
// }

// function displayChoices(alreadyRandomized) {
//     let str = '';
//     for (let i in alreadyRandomized) {
//         str += `\n ${Number(i) + 1}. ${alreadyRandomized[i]}`;
//     }
//     return str;
// }


// let newArr = randomPick(struct);
// let correct = 0;
// let total = 0;
// for (let i of newArr) {
//     let newArr2 = randomPick(i.choices);
//     let input = Number(prompt(i.question + displayChoices(newArr2))) - 1;
//     if (newArr2[input] == i.rightChoice) {
//         alert("You are correct :))");
//         correct++;
//     } else {
//         alert('You are wrong :((');
//     }
//     total++;
// }
// alert('We are out of question :(');
// alert('You answered correctly ' + correct + ' out of ' + total + ' questions');
// 1.1.
console.log(Math.random());

// 1.2.
const arr = [2, 5, 6, 9, 10];
console.log(arr[Math.floor(Math.random() * arr.length)]);

// 1.8.
const struct = [
    {
        question: "How many legs does an octopus have?",
        choices: ['4 legs', 'no legs', '8 legs', '2 legs'],
        rightChoice: '2 legs',
    },
    {
        question: "Which country is home to kangaroos?",
        choices: ['Australia', 'Austria', 'New Zealand', 'US'],
        rightChoice: 'Australia',
    },
    {
        question: "What sweet food made by bees using nectar from flowers?",
        choices: ['Bread', 'Honey', 'Sugar', 'Potent'],
        rightChoice: 'Honey',
    },
    {
        question: "What frictional detective lived at 221b Baker Street?",
        choices: ['Watson', 'Sam Spade', 'Scoobidoo', 'Sherlock Holmes'],
        rightChoice: 'Sherlock Holmes',
    }
];

function randomPick(arr) {
    let alreadyPicked = [];
    let newArr = [];
    while (true) {
        let i = Math.floor(arr.length * Math.random());
        if (!(alreadyPicked.includes(i))) {
            newArr.push(arr[i]);
            alreadyPicked.push(i);
        } if (arr.length == alreadyPicked.length) {
            break;
        }
    }
    return newArr;
}

function displayChoices(alreadyRandomized) {
    let str = '';
    for (let i in alreadyRandomized) {
        str += `\n ${Number(i) + 1}. ${alreadyRandomized[i]}`;
    }
    return str;
}


let newArr = randomPick(struct);
let correct = 0;
let total = 0;
for (let i of newArr) {
    let newArr2 = randomPick(i.choices);
    let input = Number(prompt(i.question + displayChoices(newArr2))) - 1;
    if (newArr2[input] == i.rightChoice) {
        alert("You are correct :))");
        correct++;
    } else {
        alert('You are wrong :((');
    }
    total++;
}
alert('We are out of question :(');
alert('You answered correctly ' + correct + ' out of ' + total + ' questions');

// 2.1.
// const arr3 = ['to' 'be' 'that' 'of' 'elon' 'to' 'this' 'now' 'back' 'cool' 'hey' 'love' 'of' 'life' 'that' 'rain' 'summer' 'color' 'now' 'of' 'hat' 'late' 'sorry' 'my' 'team'];
// let objCount = {};
// for (let i of arr3) {
//     if (objCount[i]) {
//         objCount[i]++;
//     } else {
//         objCount[i] = 1;
//     }
// }
const arr3 = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
let objCount = {};
for (let i of arr3) {
    if (objCount[i]) {
        objCount[i]++;
    } else {
        objCount[i] = 1;
    }
}

// let strn = '';
// for (let i in objCount) {
//     strn += i + ': ' + objCount[i] + '\n';
// }
let strn = '';
for (let i in objCount) {
    strn += i + ': ' + objCount[i] + '\n';
}


// console.log(strn);
console.log(strn);


