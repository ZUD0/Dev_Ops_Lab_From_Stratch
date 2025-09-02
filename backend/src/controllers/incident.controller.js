import {
  getAllIncidents,
  createIncident,
  updateIncidentStatus,
  getIncidentById
} from '../db/models/incident.js';

export async function getIncidents(req, res) {
  try {
    const incidents = await getAllIncidents();
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch incidents' });
  }
}

export async function addIncident(req, res) {
  try {
    const { title, details } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    const incident = await createIncident(title, details);
    res.status(201).json(incident);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create incident' });
  }
}

export async function updateIncident(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) return res.status(400).json({ error: 'Status is required' });
    const incident = await updateIncidentStatus(id, status);
    if (!incident) return res.status(404).json({ error: 'Incident not found' });
    res.json(incident);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update incident' });
  }
}

export async function getIncident(req, res) {
  try {
    const { id } = req.params;
    const incident = await getIncidentById(id);
    if (!incident) return res.status(404).json({ error: 'Incident not found' });
    res.json(incident);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch incident' });
  }
}
import { deleteIncident } from '../db/models/incident.js';
// ...existing code...

export async function removeIncident(req, res) {
  try {
    const { id } = req.params;
    const deleted = await deleteIncident(id);
    if (!deleted) return res.status(404).json({ error: 'Incident not found' });
    res.json({ message: 'Incident deleted', incident: deleted });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete incident' });
  }
}