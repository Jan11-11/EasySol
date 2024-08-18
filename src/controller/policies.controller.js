// Local Modules
import { PoliciesService } from '../services';
import { SuccessHandlerUtil } from '../utils';

export default class PoliciesController {
  static async get(req, res, next) {
    try {
      const user = await PoliciesService.get();
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async del(req, res, next) {
    try {
      const { id } = req.params;
      const user = await PoliciesService.del(id);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const info = req.body;
      const {id} = req.params
      const user = await PoliciesService.edit(id,info);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
  static async addUser(req, res, next) {
    try {
      const infoUser = req.body;
      const user = await PoliciesService.addUser(infoUser);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
}
