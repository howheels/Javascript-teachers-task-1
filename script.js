//  Task 1
const name1 = 'asunotokionapajaa'
const question = 'paja'
const question2 = ""
if (name1.includes(question)) {
    console.log(`paja is found`)
} else {
    console.log('String is not found')
}

// Part (b)
for (let i = 2; i < name1.length; i += 3) {
    if (name1[i] === "a") {
        question2 += "*";
    } else {
        question2 += name1[i].toUpperCase();
    }
}
console.log(question2);


// Task 2

// Ask age ( in console type age, Use prompt. )

// Ask age-input as long as that it is between 18 -22. if age ok, then output ( debends age) 
// OUTPUT:    18 : Young
//                    20 : Middle age
//                    22 : Old

const prompt = require("prompt-sync")();

let age;

do {
    age = parseInt(prompt("Are u between young, middle aged or old? Lets find it out!"), 10);
} while (age < 18 || age > 22);

switch (age) {
    case 18:
        console.log("Young");
        break;
    case 20:
        console.log("Middle age");
        break;
    case 22:
        console.log("Old");
        break;
    default:
        console.log("u are not between 18-22");
}

/*
TASK 3
 const task3A = ['Dog', 'Horse', 'Cow']
 task3A.forEach(task3B => {
    console.log(task3B)
 })
 const task3B = ["Dog", "Horse", "Cow"];
 const addingTheAnimals = task3B.map(animal => animal);
 addingTheAnimals.push("Cat", "Sheep");
 /*
 console.log("New array: ", addingTheAnimals);
// c1 
if(addingTheAnimals.includes('Cow')){
    console.log(`Cow is founded and it's here`)
} else {
    console.log(`Cow isn't found`)
}
// c2
if(addingTheAnimals.includes('Co')){
    console.log(`Co is founded and it's here`)
} else {
    console.log(`Co isn't found`)
}
*/

class task4 {
    constructor(type, color, amount, inStore) {
        this.type = type;
        this.color = color;
        this.amount = amount;
        this.inStore = inStore;
    }

    changeAmount(newAmount) {
        this.amount = newAmount;
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    toggleInStore() {
        this.inStore = !this.inStore;
    }
}

const valuesForTask4 = new task4("rose", "Red", 5, true);
console.log("Original situation:", valuesForTask4);
// för att ändra värden 
valuesForTask4.changeColor("Yellow");
valuesForTask4.changeAmount(4);
valuesForTask4.toggleInStore();

console.log(`After changes: Type: ${valuesForTask4.type} , Color: ${valuesForTask4.color} , Amount: ${valuesForTask4.amount} , inStore: ${valuesForTask4.inStore ? "yes" : "no"}`);

// task 4.2
const task42 = document.querySelector('.maincontent');
const addingNewTextt = document.createTextNode('Ad astra per aspera');
task42.appendChild(addingNewText);
