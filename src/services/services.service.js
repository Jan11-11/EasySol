import {  ServicesModel } from '../models';

export default class ServicesService {
  static async get() {
    const classes = await ServicesModel.get();
    return classes;
  }

  static async del(id) {
    const cls = await ServicesModel.del(id);
    return cls;
  }
  static async put(id,info) {
    const cls = await ServicesModel.update(id,info);
    return cls;
  }

  static async add(payload) {
    console.log(payload,747);
    
    const cls = await ServicesModel.add(payload);
    return cls;
  }
}
