import express from 'express';
import { PoliciesController } from '../controller';

const router = express.Router();

router.get('/get', PoliciesController.get);
router.post('/add', PoliciesController.addUser);



router.put('/put/:id', PoliciesController.edit);
router.delete('/del/:id', PoliciesController.del);

export default router;
