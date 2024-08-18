// Local Modules
import {  SlidesService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class SlidesController {
  static async get(req, res, next) {
    try {
      const user = await SlidesService.get();
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async del(req, res, next) {
    try {
      const { id } = req.params;
      const user = await SlidesService.del(id);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const infoUser = req.body;
      const user = await SlidesService.add(infoUser);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
}
