import express from 'express';
import { ServicesController} from '../controller';

const router = express.Router();

router.get('/get', ServicesController.get);
router.post('/add', ServicesController.add);
router.put('/put/:id', ServicesController.put);
router.delete('/del/:id', ServicesController.del);

export default router;
