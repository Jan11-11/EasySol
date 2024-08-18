import express from 'express';
import { PartnersController } from '../controller';

const router = express.Router();

router.get('/get', PartnersController.get);
router.post('/add', PartnersController.add);
router.put('/put/:id', PartnersController.put);

router.delete('/del/:id', PartnersController.del);

export default router;
