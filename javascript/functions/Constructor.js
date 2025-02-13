// Create a constructor function for a Person with firstName, lastName, and a method to return full name
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
const me = new Person("Olloyor", "Maxammadnabiyev");
console.log(me.fullName());

// Modify the constructor function to track the number of Person instances created.
let count = 0;
function Person1(firstName, lastName) {
  count++;
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.numberOfPerson = function () {
    return count;
  };
}
const me1 = new Person1("Olloyor", "Maxammadnabiyev");
console.log(me1.numberOfPerson());
const me2 = new Person1("Olloyor1", "Maxammadnabiyev1");
console.log(me2.numberOfPerson());

// Write a constructor function for a Car with brand, model, year, and a method to start the engine.
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.startEngine = function () {
    return `${this.model} is running now`;
  };
}
const car = new Car("Toyota", "Corolla", 2020);
console.log(car.startEngine());

// Implement a constructor function for students that stores grades and calculates the average.
function StudentAvarage(name, grades) {
  this.name = name;
  this.grades = grades;
  this.avarageGrade = function () {
    let sum = 0;
    this.grades.forEach((element) => {
      sum += element;
    });
    return sum / this.grades.length;
  };
}
const student = new StudentAvarage("Olloyor", [100, 80, 70, 60, 50]);
console.log(student.avarageGrade());

// Create a constructor function for a BankAccount with deposit, withdraw, and balance-check methods.
function BankAccount(balance) {
  this.balance = balance;
  this.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
  };
  this.withdrawn = function (amount) {
    this.balance -= amount;
    return this.balance;
  };
  this.balanceCheck = function () {
    return this.balance;
  };
}
const account = new BankAccount(1000);
console.log(account.balanceCheck());
console.log(account.deposit(100));
console.log(account.withdrawn(450));

// Modify the BankAccount constructor to set a minimum balance requirement.

function BankAccountUpdate(balance, minBalance) {
  this.balance = balance;
  this.minBalance = minBalance;
  this.deposit = function (amount) {
    this.balance += amount;
    return this.balance;
  };
  this.withdrawn = function (amount) {
    if (this.balance - amount < minBalance) {
      return `You don't have enough money`;
    } else {
      this.balance -= amount;
      return this.balance;
    }
  };
  this.balanceCheck = function () {
    return this.balance;
  };
}

const myAccount = new BankAccountUpdate(1000, 500);
console.log(myAccount.balanceCheck());

console.log(myAccount.deposit(450));
console.log(myAccount.withdrawn(1000));

// Implement a constructor for GameCharacter with health, attack power, and a method to attack another character.
function GameCharacter(health, power) {
  this.health = health;
  this.power = power;
  this.attack = function (otherCharacter) {
    otherCharacter.health -= this.power;
  };
}
const character1 = new GameCharacter(100, 25);
const character2 = new GameCharacter(100, 40);
character1.attack(character2);
console.log(character2.health);

character2.attack(character1);
console.log(character1.health);

//Create a constructor function for TaskManager that can add and remove tasks.
function TaskManager(tasks) {
  this.tasks = tasks;
  this.addTask = function (task) {
    this.tasks.push(task);
  };
  this.removeTask = function (task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  };
}
const taskManager = new TaskManager(["delete", "edit", "render", "debug"]);
console.log(taskManager.tasks);
taskManager.addTask("add");
console.log(taskManager.tasks);

taskManager.removeTask("edit");
console.log(taskManager.tasks);

// Write a constructor function for Movie with properties like title, genre, and a method to play the movie
function Movie(title, genre) {
  this.title = title;
  this.genre = genre;
  this.playMovie = function () {
    return `${this.title} is playing now`;
  };
}

const movie = new Movie("The Shawshank Redemption", "Drama");
console.log(movie);
console.log(movie.playMovie());

// Implement a constructor function for Events, where each event has a name, date, and description.
function EventsFactory(name, date, description) {
  this.name = name;
  this.date = date;
  this.description = description;
}
const event1 = new Events("Birthday", "12/12/2023", "Birthday party");

console.log(event1);

