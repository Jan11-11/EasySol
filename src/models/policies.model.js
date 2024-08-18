import { Model } from 'objection';

class PoliciesModel extends Model {
  static get idColumn() { return 'id'; }

  static get tableName() { return 'policies'; }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],
      properties: {
        id: { type: 'integer' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' }
      }
    };
  }

  static async get() {
    try {
      return await PoliciesModel.query().select('*').orderBy('id');
    } catch (error) {
      return { err: error.message };
    }
  }

  static async del(id) {
    try {
      return await PoliciesModel.query().where('id', '=', id).del();
    } catch (error) {
      return { err: error.message };
    }
  }

  static async create(payload) {
    try {
      return await PoliciesModel.query().insert(payload);
    } catch (error) {
      return { err: error.message };
    }
  }
  static async edit(id,info) {
    try {
      return await PoliciesModel.query().update(info).where('id','=',id);
    } catch (error) {
      return { err: error.message };
    }
  }
}

export default PoliciesModel;
