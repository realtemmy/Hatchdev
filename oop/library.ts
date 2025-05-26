class Member {
  private name: string;
  private borrowedBooks: Set<string> = new Set();

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
  getBorrowedBooks(): string[] {
    return Array.from(this.borrowedBooks);
  }
  borrowBook(book: Book): string {
    // First check if the book has been borrowed already
    if (this.borrowedBooks.has(book.getName())) {
      return `${
        this.name
      } has borrowed ${book.getName()} previously and yet to return`;
    }
    if (!book.borrow()) {
      return `${book.getName()} is currently not available.`;
    }

    return `${this.name} has successfuly borrowed book: ${book.getName()}`;
  }

  returnBook(book: Book) {
    if (this.borrowedBooks.has(book.getName())) {
      return `${this.name} did not borrow ${book.getName()}.`;
    }
    book.returnBook();
    this.borrowedBooks.delete(book.getName());
  }
}

class Book {
  private name: string;
  private isAvailable: boolean;
  constructor(name: string, isAvailable: boolean) {
    this.name = name;
    this.isAvailable = isAvailable;
  }

  getName(): string {
    return this.name;
  }

  checkAvailability(): boolean {
    return this.isAvailable;
  }
  borrow(): boolean {
    // Check if book is available ie another person has not borrowed it
    if (!this.checkAvailability()) {
      return false;
    }
    this.isAvailable = false;
    return true;
  }

  returnBook() {
    this.isAvailable = true;
  }
}

class Lib {
  books: Book[] = [];
  members: Member[] = [];

  // add book, borrow book, list available books
  borrowBook(memberName: string, bookName: string): string {
    // First check if user exists and book is available
    const member = this.members.find((member) => member.getName() === memberName);
    if (!member) {
      return `${memberName} is not a member`;
    }
    // Check if book exists and is available
    const book = this.books.find((book) => book.getName() === bookName && book.checkAvailability() === true);

    if (!book) {
      return `${bookName} is not available`;
    }
    // If book is available, borrow it and add the book to member borrowed books list
    member.borrowBook(book);

    return `${member.getName()} has successfully borrowed ${book.getName()}`;
  }

  addBook(bookName: string): string {
    // check if book exists
    const bookExists = this.books.find((book) => book.getName() === bookName);
    if (bookExists) {
      return `${bookName} already exists in collection of books`;
    }
    // Create new book
    const book = new Book(bookName, true);
    this.books.push(book);

    return `${bookName} added successfully.`;
  }

  returnBook(memberName: string, bookName: string):string {
    // find the book and update it
    const book = this.books.find((book) => book.getName() === bookName);
    const member = this.members.find(member => member.getName() === memberName);
    if (!book || !member) {
      return `Book or User not found`;
    }
    member.returnBook(book);
    return `${member.getName()} has successfully returned ${book.getName()}`;
  }

  addMember(name: string): string {
    // Check if member already exists
    const userExists = this.members.find((member) => member.getName() === name);
    if (userExists) {
      return `${name} already exists in collection of members`;
    }
    this.members.push(new Member(name));
    return `${name} added successfully.`;
  }

  removeMember(name: string) {
    this.members = this.members.filter((member) => member.getName() !== name);
    return `${name} has been removed from the library members list.`;
  }

  listMembers(): Member[] {
    return this.members;
  }
  listAvailableBooks(): Book[] {
    this.books = this.books.filter((book) => book.checkAvailability() === true);
    return Array.from(this.books);
  }
}

const lib = new Lib();
console.log(lib.addMember("Alice"));
console.log(lib.addMember("Bob"));
console.log(lib.addMember("Alice"));

console.log(lib.addBook("1984"));       
console.log(lib.addBook("Brave New World"));
console.log(lib.addBook("1984"));


console.log(lib.borrowBook("Alice", "1984")); // Alice has successfully borrowed 1984
console.log(lib.borrowBook("Bob", "1984")); // 1984 is currently not available.
console.log(lib.borrowBook("Bob", "Brave New World")); // Bob has successfully borrowed Brave New World
console.log(lib.returnBook("Alice", "1984")); // Alice has successfully returned 1984
// console.log(lib.borrowBook("Bob", "1984")); // Bob has successfully borrowed 1984

console.log(lib.listAvailableBooks()); // Should only list books that haven’t been borrowed
console.log(lib.removeMember("Alice")); // Alice has been removed from the library members list.
// console.log(lib.listMembers().map(m => m.getName())); // ['Bob']
// console.log(lib.borrowBook("Charlie", "1984")); // Charlie is not a member
