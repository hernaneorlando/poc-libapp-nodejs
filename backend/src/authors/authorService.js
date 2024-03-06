class AuthorService {
  constructor(db) {
    this.db = db;
  }

  async listAuthors() {
    return this.db.Author.findAll();
  }
}

export default AuthorService;