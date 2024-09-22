// src/routes/appointment.routes.ts
// src/routes/appointment.routes.ts
import { Router } from 'express';
import {
    createAppointment,
    getAppointments,
    updateAppointment,
    cancelAppointment,
} from '../../controller/Appointment.controller';
import { authenticate } from '../../authentication/jwtAuth';
const router = Router();

router.post('/create', authenticate,createAppointment); // Create an appointment
router.get('/',authenticate, getAppointments); // Get appointments
router.put('/:id',authenticate, updateAppointment); // Update an appointment
router.delete('/:id',authenticate, cancelAppointment); // Cancel an appointment

export default router;

