// Local Modules
import { PartnersService } from '../services';
import { SuccessHandlerUtil } from '../utils';
const HOST_OF_SERVER = process.env.HOST_OF_SERVER
export default class PartnersController {
  static async get(req, res, next) {
    try {
      const user = await PartnersService.get();
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
  static async addPicture(req, res, next) {
    try {
      const { file } = req;
      const { originalname, filename, path } = file;
      const dirname = `${HOST_OF_SERVER}/${path}`;
      SuccessHandlerUtil.handleAdd(res, next, {
        originalname,
        filename,
        dirname,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
  static async del(req, res, next) {
    try {
      const { id } = req.params;
      const user = await PartnersService.del(id);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
  static async put(req, res, next) {
    try {
      const { id } = req.params;
      const info = req.body
      const user = await PartnersService.put(id,info);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const infoUser = req.body;
      console.log(infoUser);
      const user = await PartnersService.add(infoUser);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }
}
