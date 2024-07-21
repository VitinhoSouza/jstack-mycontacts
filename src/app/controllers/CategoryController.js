const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(req, res) {
    // Listar todos os registros

    const { orderBy } = req.query;
    const categories = await CategoriesRepository.findAll(orderBy);
    res.json(categories);
  }

  async show(req, res) {
    // Obter 1 registro
    const { id } = req.params;
    const category = await CategoriesRepository.findById(id);

    if (!category) {
      // 404: Not Found
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  }

  async store(req, res) {
    // Criar novo registro
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({
      name,
    });

    res.status(201).json(category);
  }

  async update(req, res) {
    // Editar 1 registro

    const { id } = req.params;
    const { name } = req.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return res.status(400).json({ error: 'Category not found' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.update(id, name);

    res.json(category);
  }

  async delete(req, res) {
    // Deletar 1 registro
    const { id } = req.params;

    await CategoriesRepository.delete(id);

    // 204: No Content
    res.sendStatus(204);
  }
}

// Singleton
module.exports = new CategoryController();
