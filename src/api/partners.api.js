import express from 'express';
import { PartnersController } from '../controller';
import { ImageUploadMiddleware } from "../middlewares/image-upload.middleware";

const router = express.Router();

router.get('/get', PartnersController.get);
router.post('/add', PartnersController.add);
router.put('/put/:id', PartnersController.put);
router.post(
    "/addPicture",
    // AuthMiddleware.authenticateFor(['admin']),
    ImageUploadMiddleware.upload(),
    PartnersController.addPicture
  );

router.delete('/del/:id', PartnersController.del);

export default router;
