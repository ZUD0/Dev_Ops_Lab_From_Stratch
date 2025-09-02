import { useEffect, useState } from 'react';
import IncidentList from '../components/IncidentList.jsx';
import IncidentCard from '../components/IncidentCard.jsx';
import StatusFilter from '../components/StatusFilter.jsx';
import { fetchIncidents, fetchIncident, updateIncident, deleteIncident } from '../api/incident.js';

function Dashboard({ setSnackbar, refresh }) {
  const [incidents, setIncidents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchIncidents().then(setIncidents);
  }, [refresh]); // Refresh incidents when 'refresh' changes

  useEffect(() => {
    if (selectedId) {
      fetchIncident(selectedId).then(setSelectedIncident);
    }
  }, [selectedId]);

  const handleUpdateStatus = async (id, status) => {
    const updated = await updateIncident(id, status);
    setSnackbar({ open: true, message: 'Status updated!' });
    setIncidents((prev) =>
      prev.map((inc) => (inc.id === id ? { ...inc, status: updated.status } : inc))
    );
    setSelectedIncident(updated);
  };

  const handleDelete = async (id) => {
    await deleteIncident(id);
    setSnackbar({ open: true, message: 'Incident deleted!' });
    setIncidents((prev) => prev.filter((inc) => inc.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
      setSelectedIncident(null);
    }
  };

  const filteredIncidents = filter
    ? incidents.filter((inc) => inc.status === filter)
    : incidents;

  return (
    <>
      <StatusFilter value={filter} onChange={(e) => setFilter(e.target.value)} />
      <IncidentList
        incidents={filteredIncidents}
        onSelect={setSelectedId}
        onDelete={handleDelete}
      />
      {selectedIncident && (
        <IncidentCard incident={selectedIncident} onUpdateStatus={handleUpdateStatus} />
      )}
    </>
  );
}

export default Dashboard;