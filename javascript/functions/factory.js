// Create a factory function that returns a car object with brand, model, and year properties
function carFactory(brand, model, year) {
  return {
    brand,
    model,
    year,
  };
}
console.log(carFactory("Toyota", "Corolla", 2020));

// Modify the factory function to include a method that returns the car's age.
function carFactory1(brand, model, year) {
  return {
    brand,
    model,
    year,
    getAge() {
      return `Car age is ${2025 - year} years old`;
    },
  };
}
console.log(carFactory1("Toyota", "Corolla", 2020).getAge());

// Write a factory function that returns a user object with name, email, and a method to update the email
function userFactory(name, email) {
  return {
    name,
    email,
    updateEmail(newEmail) {
      this.email = newEmail;
    },
  };
}
let user1 = userFactory("Olloyor", "olloyor@example.com");
console.log(user1);

user1.updateEmail("maxammadnabiyev@example.com");
console.log(user1.email);

// Create a factory function that generates bank account objects with deposit and withdrawal methods.
function bankAccountFactory(balance) {
  return {
    balance,
    deposit() {
      return (balance += 1000);
    },
    withdraw() {
      return (balance -= 500);
    },
  };
}
let bankAccount1 = bankAccountFactory(1000);
console.log(bankAccount1);

bankAccount1.deposit(); // + 1000 = 20000
console.log(bankAccount1.deposit()); // 2000 + 1000 = 3000

// Write a factory function for creating books with title, author, and a method to show book details

function books(title, author) {
  return {
    title,
    author,
    bookDetails() {
      return `Book title is ${title} and author is ${author}`;
    },
  };
}
let book1 = books("Xamsa", "Alisher Navoiy");
console.log(book1.bookDetails());

// Modify the book factory function to track the number of books created.

let bookCount = 0;
function booksFactory(name, author) {
  bookCount++;
  return {
    name,
    author,
    bookDetails() {
      return `Book title is ${name} and author is ${author}`;
    },
    numberOfBooks() {
      return `Number of books is ${bookCount}`;
    },
  };
}
let book2 = booksFactory("The Odyssey", "Homer");
let book3 = booksFactory("Pride and Prejudice", "Jane Austen");
let book4 = booksFactory("1984", "George Orwell");

console.log(book2.numberOfBooks());
console.log(book2.bookDetails());
console.log(book3.bookDetails());
console.log(book4.bookDetails());

// Implement a factory function that creates products with dynamic pricing based on a discount percentage.
function productFactory(name, price, discount) {
  return {
    name,
    price,
    discount,
    getPrice() {
      return price - (price * discount) / 100;
    },
  };
}
let product1 = productFactory("Shoes", 1000, 10);
console.log(product1.getPrice());

//Create a factory function that generates employees with a calculateSalary method based on working hours
function employeesFactory(name, salary, workingHours) {
  return {
    name,
    salary,
    workingHours,
    calculateSalary() {
      return salary * workingHours;
    },
  };
}
let employee1 = employeesFactory("Olloyor", 2000, 6);
console.log(employee1.calculateSalary());

// Write a factory function for a playlist that can add, remove, and list songs.
function playlistFactory(songs) {
  return {
    songs,
    addSong(newSong) {
      this.songs.push(newSong);
      return this.songs;
    },
    removeSong(oldSong) {
      this.songs = this.songs.filter((song) => song !== oldSong);
      return this.songs;
    },
    listSong() {
      return this.songs;
    },
  };
}
let myPlaylist = playlistFactory([
  "song1",
  "song2",
  "song3",
  "song4",
  "song5",
  "song6",
]);

console.log(myPlaylist.addSong("Yalla"));
console.log(myPlaylist.removeSong("song6"));

//Implement a factory function for a shopping cart that allows adding and removing items dynamically
function shoppingCartFactory(items) {
  return {
    items,
    addItems(newItem) {
      this.items.push(newItem);
      return this.items;
    },
    removeItem(oldItem) {
      this.items = this.items.filter((item) => item !== oldItem);
      return this.items;
    },
  };
}

let myShoppingCart = shoppingCartFactory([
  "bolta",
  "tesha",
  "qogoz",
  "kitob",
  "qalam",
  "ruchka",
]);

console.log(myShoppingCart.items);

console.log(myShoppingCart.addItems('penal'));

console.log(myShoppingCart.removeItem('kitob'));

