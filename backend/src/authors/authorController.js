import AuthorService from './authorService.js';

class AuthorController {
  constructor(db) {
    this.service = new AuthorService(db);
  }

  async getAll(req, res) {
    const authors = await this.service.listAuthors();
    return res.status(200).json(authors);
  }
}

export default AuthorController;