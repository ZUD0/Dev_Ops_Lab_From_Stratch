import { Router } from 'express';
import { setUserSession, getUserSession, destroySession } from '../controllers/session.controller.js';

const router = Router();

router.post('/set', setUserSession);
router.get('/get', getUserSession);
router.post('/destroy', destroySession);

export default router;