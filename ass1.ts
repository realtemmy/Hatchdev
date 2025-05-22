class LMS {
  record: Map<string, string>;
  members: Set<String>;
  books: Set<string>;

  constructor() {
    this.books = new Set();
    this.members = new Set();
    this.record = new Map();
  }

  createUser(name: string) {
    if (!this.members.has(name)) {
      this.members.add(name);
    }
  }
  addBook(book: string) {
    if (!this.books.has(book)) {
      this.books.add(book);
    }
  }
  listMembers() {
    return Array.from(this.members);
  }
  removeBook(book: string) {
    this.books.delete(book);
  }
  listBooks() {
    return Array.from(this.books);
  }
  borrowABook(book: string, name: string) {
    // Check if book exist
    if (this.books.has(book)) {
      this.createUser(name);
      this.record.set(name, book);
    }
    return this.record.get(name) || "Book not found";
  }
}

const lms = new LMS();

lms.addBook("Alice in the wonderland");
lms.addBook("Harry Potter");
console.log(lms.borrowABook("Alice in the wonderland", "Temiloluwa"));
lms.removeBook("Harry Potter");
console.log(lms.listBooks());
