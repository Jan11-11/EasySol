// Local Modules
import {  ServicesService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class ServicesController {
  static async get(req, res, next) {
    try {
      const user = await ServicesService.get();
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async del(req, res, next) {
    try {
      const { id } = req.params;
      const user = await ServicesService.del(id);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
  
      const infoUser = req.body;
      console.log(infoUser,111);
      const user = await ServicesService.add(infoUser);
      console.log(user,55);
      
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async put(req, res, next) {
    try {
      const info = req.body;
      const {id} = req.params
      const user = await ServicesService.put(id,info);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
}
