import express from 'express';
import { VacanciesController } from '../controller';
import { ImageUploadMiddleware } from '../middlewares/image-upload.middleware';

const router = express.Router();

router.get('/get', VacanciesController.get);
router.post('/add', VacanciesController.add);
router.put('/put/:id', VacanciesController.put);
router.delete('/del/:id', VacanciesController.del);

router.post('/addPicture',
    ImageUploadMiddleware.upload(),
    VacanciesController.addPic
);

export default router;
