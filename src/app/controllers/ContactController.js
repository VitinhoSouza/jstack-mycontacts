const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    // Listar todos os registros

    const contacts = await ContactsRepository.findAll();
    res.json(contacts);
  }

  show() {
    // Obter 1 registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar 1 registro
  }

  delete() {
    // Deletar 1 registro
  }
}

// Singleton
module.exports = new ContactController();