import { PoliciesModel } from '../models';

export default class PoliciesService {
  static async get() {
    const classes = await PoliciesModel.get();
    return classes;
  }
  static async edit(id,info) {
    const classes = await PoliciesModel.edit(id,info);
    return classes;
  }

  static async del(id) {
    const cls = await PoliciesModel.del(id);
    return cls;
  }

  static async addClass(payload) {
    const cls = await PoliciesModel.create(payload);
    return cls;
  }
}
