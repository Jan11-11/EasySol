// Local Modules
import { VacanciesService } from '../services';
import { SuccessHandlerUtil } from '../utils';
require('dotenv').config()

export default class VacanciesController {
  static async get(req, res, next) {
    try {
      const user = await VacanciesService.get();
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async del(req, res, next) {
    try {
      const { id } = req.params;
      const user = await VacanciesService.del(id);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  }

  static async add(req, res, next) {
    try {
      const infoUser = req.body;
      const user = await VacanciesService.add(infoUser);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  };
  static async put(req, res, next) {
    try {
      const info = req.body;
      const {id} = req.params
      const user = await VacanciesService.put(id,info);
      SuccessHandlerUtil.handleAdd(res, next, user);
    } catch (error) {
      next(error);
    }
  };


  static async addPic(req, res, next) {
    try {
        const server = process.env.HOST_OF_SERVER;
        const { file } = req;
        const { originalname, filename, path } = file;

        console.log(file,"Ppppppppppppppppppppp");
        const dirname = `${server}/${path}`;
        SuccessHandlerUtil.handleAdd(res, next, {
            originalname,
            filename,
            dirname,
            success: true
        });

    } catch (error) {
        next(error);
    }

}


}
