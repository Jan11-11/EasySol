import {  SlidesModel } from '../models';

export default class SlidesService {
  static async get() {
    const classes = await SlidesModel.get();
    return classes;
  }

  static async del(id) {
    const cls = await SlidesModel.del(id);
    return cls;
  }

  static async add(payload) {
    const cls = await SlidesModel.create(payload);
    return cls;
  }
}
