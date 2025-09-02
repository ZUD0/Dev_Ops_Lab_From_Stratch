import { Router } from 'express';
import {
  getIncidents,
  addIncident,
  updateIncident,
  getIncident,
  removeIncident
} from '../controllers/incident.controller.js';

const router = Router();

router.get('/', getIncidents);           // GET all incidents
router.post('/', addIncident);           // POST new incident
router.put('/:id', updateIncident);      // PUT update status
router.get('/:id', getIncident);         // GET incident by ID
router.delete('/:id', removeIncident); // DELETE incident by ID

export default router;