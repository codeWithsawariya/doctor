import { Router } from 'express';
import { register } from '../../controller/patient.controller';
import { authenticate } from '../../authentication/jwtAuth';
const router = Router();

router.post('/register',authenticate, register);


export default router;
