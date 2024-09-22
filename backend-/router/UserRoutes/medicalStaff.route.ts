import { Router } from 'express';
import { register} from '../../controller/medicalStaff.controller';
import { authenticate } from '../../authentication/jwtAuth';
const router = Router();

router.post('/register', authenticate,register);
// router.post('/login',signIn);

export default router;
