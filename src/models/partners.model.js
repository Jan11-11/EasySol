import { Model } from 'objection';

class PartnersModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'partners'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        logo: { type: 'string' },
        title: { type: 'string' },
        text: { type: 'string' },
        created_at: { type: 'string' }, // Remove format: 'date-time'
        updated_at: { type: 'string' }  // Remove format: 'date-time'
      }
    };
  }

  static async get() {
    try {
      return await PartnersModel.query().select('*').orderBy('id');
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return { err: error.message };
    }
  }

  static async del(id) {
    try {
      return await PartnersModel.query().where('id', '=', id).del();
    } catch (error) {
      console.error('Error deleting data:', error.message);
      return { err: error.message };
    }
  }

  static async create(payload) {
    try {
      return await PartnersModel.query().insert(payload);
    } catch (error) {
      console.error('Error inserting data:', error.message);
      return { err: error.message };
    }
  }

  static async update(id, info) {
    try {
      return await PartnersModel.query()
        .patch(info)
        .where('id', '=', id);
    } catch (error) {
      console.error('Error updating data:', error.message);
      return { err: error.message };
    }
  }
}

export default PartnersModel;
