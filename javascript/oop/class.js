// Create a Person class with a method that returns the person's full name.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
const my = new Person("Olloyor", "Maxammadnabiyev");
console.log(my.fullName());

// Extend the Person class to create a Student subclass with grade and a method to check if the student passed.
class Student extends Person {
  constructor(firstName, lastName, grade) {
    super(firstName, lastName);
    this.grade = grade;
    this.check = function () {
      if (this.grade > 70) {
        return `${this.fullName()} Passed`;
      } else {
        return `${this.fullName()} Failed`;
      }
    };
  }
}
const me = new Student("Olloyor", "Maxammadnabiyev", 95);
console.log(me.check());

// Write a Car class that has a startEngine method and a subclass ElectricCar that overrides this method.
class Car {
  constructor(made, model) {
    this.made = made;
    this.model = model;
  }
  startEngine() {
    return `Engine is started`;
  }
}

class ElectricCar extends Car {
  constructor(made, model, battery) {
    super(made, model);
    this.battery = battery;
  }
  startEngine() {
    return `Engine is started by ${this.battery}`;
  }
}
const tesla = new ElectricCar("Tesla", "Model S", "SpaceX");
console.log(tesla.startEngine());

// Implement a BankAccount class with deposit, withdrawal, and balance methods.
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
  withdrawal(amount) {
    this.balance -= amount;
    return this.balance;
  }
  currentBalance() {
    return this.balance;
  }
}
const myAccount = new BankAccount(1000);
console.log(myAccount.currentBalance());

console.log(myAccount.withdrawal(550));

console.log(myAccount.deposit(1000));

// Modify the BankAccount class to allow interest calculation
class ModifiedBankAccount extends BankAccount {
  constructor(balance) {
    super(balance);
  }
  interest(rate) {
    return (this.balance * rate) / 100;
  }
}
const myModifiedAccount = new ModifiedBankAccount(2000);
console.log(myModifiedAccount.interest(5));

