import pool from '../index.js';
import redisClient from '../redisClient.js';

// Get all incidents with Redis caching
export async function getAllIncidents() {
  const cached = await redisClient.get('incidents');
  if (cached) {
    return JSON.parse(cached);
  }
  const res = await pool.query('SELECT * FROM incidents ORDER BY created_at DESC');
  await redisClient.set('incidents', JSON.stringify(res.rows), { EX: 60 });
  return res.rows;
}

// Create a new incident
export async function createIncident(title, details) {
  const res = await pool.query(
    `INSERT INTO incidents (title, details) VALUES ($1, $2) RETURNING *`,
    [title, details]
  );
  await redisClient.del('incidents'); // Invalidate cache
  return res.rows[0];
}

// Update incident status
export async function updateIncidentStatus(id, status) {
  const res = await pool.query(
    `UPDATE incidents SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
    [status, id]
  );
  await redisClient.del('incidents'); // Invalidate cache
  return res.rows[0];
}

// Get incident by ID
export async function getIncidentById(id) {
  const res = await pool.query(
    `SELECT * FROM incidents WHERE id = $1`,
    [id]
  );
  return res.rows[0];
}

export async function deleteIncident(id) {
  const res = await pool.query(
    `DELETE FROM incidents WHERE id = $1 RETURNING *`,
    [id]
  );
  await redisClient.del('incidents'); // Invalidate cache
  return res.rows[0];
}