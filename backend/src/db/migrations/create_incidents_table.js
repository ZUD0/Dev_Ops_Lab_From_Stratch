import pool from '../index.js';

const createTableSQL = `
CREATE TABLE IF NOT EXISTS incidents (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  details TEXT,
  status VARCHAR(50) NOT NULL DEFAULT 'Open',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
`;

async function migrate() {
  try {
    await pool.query(createTableSQL);
    console.log('Incidents table created (or already exists).');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await pool.end();
  }
}

migrate();