import pool from './index.js';

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected! Server time:', res.rows[0].now);
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await pool.end();
  }
}

testConnection();