const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const result = await pool.query('SELECT * FROM tasks');
    return result.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
