import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
});

async function createBook() {
  const Book = mongoose.model("Book", bookSchema);

  const book = new Book({
    name: "Grokking Algorithms",
    author: "Azimjon Pulatov",
  });

  const savedBook = await book.save();
  console.log(savedBook);
}
createBook()

