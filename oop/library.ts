class Member {
  name: string;
  borrowedBooks: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

class Book {
  name: string;
  isAvailable: boolean;
  constructor(name: string, isAvailable: boolean) {
    this.name = name;
    this.isAvailable = isAvailable;
  }
}

class Lib {
  books: Book[] = [];
  members: Member[] = [];

  // add book, borrow book, list available books
  borrowBook(memberName: string, bookName: string): string {
    // First check if user exists and book is available
    const member = this.members.find((member) => member.name === memberName);
    if (!member) {
      return `${memberName} is not a member`;
    }
    // Check if book exists and is available
    const book = this.books.find(
      (book) => book.name === bookName && book.isAvailable
    );

    if (!book) {
      return `${bookName} is not available`;
    }
    // If book isavailable, borrow it and add the book to member borrowed books list
    member.borrowedBooks.push(book);
    book.isAvailable = false;

    return `${member.name} has successfully borrowed ${book.name}`;
  }

  addBook(bookName: string): string {
    // check if book exists
    const bookExists = this.books.find((book) => book.name === bookName);
    if (bookExists) {
      return `${bookName} already exists in collection of books`;
    }
    // Create new book
    const book = new Book(bookName, true);
    this.books.push(book);

    return `${bookName} added successfully.`;
  }

  removeBook(bookName: string): Book[] {
    this.books = this.books.filter((book) => book.name !== bookName);
    return this.books;
  }

  addMember(name: string): string {
    // Check if member already exists
    const userExists = this.members.find((member) => member.name === name);
    if (userExists) {
      return `${name} already exists in collection of members`;
    }
    this.members.push(new Member(name));
    return `${name} added successfully.`;
  }

  removeMember(name: string) {
    this.members = this.members.filter((member) => member.name !== name);
  }

  listMembers(): Member[] {
    return this.members;
  }
  listAvailableBooks(): Book[] {
    this.books = this.books.filter((book) => book.isAvailable === true);
    return this.books;
  }
}

// Create a new library
const library = new Lib();

// Add some books to the library
console.log(library.addBook("The Hobbit")); // The Hobbit added successfully.
console.log(library.addBook("1984")); // 1984 added successfully.
console.log(library.addBook("The Hobbit")); // The Hobbit already exists in collection of books

// Add some members
library.addMember("Alice");
library.addMember("Bob");

// Try to borrow a book
console.log(library.borrowBook("Alice", "The Hobbit")); // Alice has successfully borrowed The Hobbit
console.log(library.borrowBook("Bob", "The Hobbit")); // The Hobbit is not available
console.log(library.borrowBook("Charlie", "1984")); // Charlie is not a member

// List available books
console.log("Available Books:", library.listAvailableBooks());
console.log("Members: ", library.listMembers());
// Should list only "1984" since "The Hobbit" was borrowed

// // List members and their borrowed books
// console.log("Library Members and Borrowed Books:");
// library.listMembers().forEach(member => {
//   const borrowedTitles = member.borrowedBooks.map(book => book.name);
//   console.log(`${member.name}: ${borrowedTitles.join(", ") || "No books borrowed"}`);
// });
