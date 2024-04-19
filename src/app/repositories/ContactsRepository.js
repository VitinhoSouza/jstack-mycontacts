const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Victor',
    email: 'victor@gmail.com',
    phone: '111111111',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
