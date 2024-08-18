import { Model } from 'objection';

class SlidesModel extends Model {
  static get idColumn() {
    return 'id';
  }

  static get tableName() {
    return 'slides';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['image'],
      properties: {
        id: { type: 'integer' },
        image: { type: 'string' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  async $beforeInsert() {
    const now = new Date().toISOString();
    this.created_at = now;
    this.updated_at = now;
  }

  async $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static async get() {
    try {
      return await SlidesModel.query().select('*');
    } catch (error) {
      return { err: error.message };
    }
  }

  static async del(id) {
    try {
      return await SlidesModel.query().deleteById(id);
    } catch (error) {
      return { err: error.message };
    }
  }

  static async create(payload) {
    try {
      return await SlidesModel.query().insert(payload);
    } catch (error) {
      return { err: error.message };
    }
  }
}

export default SlidesModel;
