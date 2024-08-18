import { VacanciesModel } from '../models';

export default class VacanciesService {
  static async get() {
    const classes = await VacanciesModel.get();
    return classes;
  }

  static async del(id) {
    const cls = await VacanciesModel.del(id);
    return cls;
  }

  static async add(payload) {
    const cls = await VacanciesModel.create(payload);
    return cls;
  }
  static async put(id,info) {
    const cls = await VacanciesModel.put(id,info);
    return cls;
  }
}
