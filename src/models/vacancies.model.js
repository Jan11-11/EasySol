import { Model } from 'objection';

class VacanciesModel extends Model {
  static get idColumn() {
    return 'id';
  }

  static get tableName() {
    return 'vacancies';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'], // Ensure this matches your actual database schema requirements
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        // title: { type: 'string' },
        text: { type: 'string' },
        salary: { type: 'number' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
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
      return await VacanciesModel.query().select('*').orderBy('id');
    } catch (error) {
      console.error('Error fetching vacancies:', error.message);
      return { err: error.message };
    }
  }

  static async del(id) {
    try {
      return await VacanciesModel.query().deleteById(id);
    } catch (error) {
      console.error(`Error deleting vacancy ${id}:`, error.message);
      return { err: error.message };
    }
  }

  static async create(payload) {
    console.log('Creating vacancy with payload:', payload);
    try {
      const insertedVacancy = await VacanciesModel.query().insert(payload);
      console.log('Inserted vacancy:', insertedVacancy);
      return insertedVacancy;
    } catch (error) {
      console.error('Error inserting vacancy:', error.message);
      return { err: error.message };
    }
  }

  static async put(id, info) {
    try {
      return await VacanciesModel.query().update(info).where('id', '=', id);
    } catch (error) {
      console.error(`Error updating vacancy ${id}:`, error.message);
      return { err: error.message };
    }
  }
}

export default VacanciesModel;
