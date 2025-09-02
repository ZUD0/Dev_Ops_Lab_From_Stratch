const API_URL = 'http://localhost:4000/api/incidents';

export async function fetchIncidents() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createIncident(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateIncident(id, status) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  return res.json();
}

export async function fetchIncident(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}
export async function deleteIncident(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
}