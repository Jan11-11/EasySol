import express from 'express';
import { SlidesController } from '../controller';

const router = express.Router();

router.get('/get', SlidesController.get);
router.post('/add', SlidesController.add);
router.delete('/del/:id', SlidesController.del);

export default router;
