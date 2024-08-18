import { Model } from 'objection';

class UsersModel extends Model {
  static get tableName() {
    return 'users';
  }

  static async getBy(email) {
    try {
      return await UsersModel.query().findOne({ email });
    } catch (error) {
      console.error('Error fetching user by email:', error.message);
      return null;
    }
  }
}

export default UsersModel;
