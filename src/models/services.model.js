import { Model } from 'objection';

class ServicesModel extends Model {
  static get tableName() {
    return 'services';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'description', 
        // 'title'


      ],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        description: { type: 'string' },
        // title: { type: 'string' },
        subTitle: {
          type: 'array',
          items: { type: 'object' }
        }
        
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
      return await ServicesModel.query().select('*').orderBy('id');
    } catch (error) {
      console.error('Error fetching services:', error.message);
      return { err: error.message };
    }
  }

  static async delete(id) {
    try {
      return await ServicesModel.query().deleteById(id);
    } catch (error) {
      console.error(`Error deleting service ${id}:`, error.message);
      return { err: error.message };
    }
  }
  static async update(id, info) {
    try {
    
      return await ServicesModel.query()
        .patch(info)
        .where('id', id);
    } catch (error) {
      console.error(`Error updating service ${id}:`, error.message);
      return { err: error.message };
    }
  }
  static async add(payload) {
    try {
      // Ensure payload is correctly formatted
      if (payload.subTitle && typeof payload.subTitle !== 'object') {
        throw new Error('Invalid JSON format for subTitle');
      }

      // Insert data
      return await ServicesModel.query().insert(payload);
    } catch (error) {
      console.error('Error inserting service:', error.message);
      return { err: error.message };
    }
  }
}

export default ServicesModel;
