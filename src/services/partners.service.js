import { PartnersModel } from '../models';

export default class PartnersService {
  static async get() {
    const classes = await PartnersModel.get();
    return classes;
  }

  static async del(id) {
    const cls = await PartnersModel.del(id);
    return cls;
  }

  static async add(payload) {
    const cls = await PartnersModel.create(payload);
    return cls;
  }
  static async put(id,info) {
    const cls = await PartnersModel.update(id,info);
    return cls;
  }
}
