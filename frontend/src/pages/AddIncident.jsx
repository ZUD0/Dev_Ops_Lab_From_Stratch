import IncidentForm from '../components/IncidentForm.jsx';
import { createIncident, fetchIncidents } from '../api/incident.js';

function AddIncident({ open, onClose, setSnackbar }) {
  const handleSubmit = async (data) => {
    await createIncident(data);
    setSnackbar({ open: true, message: 'Incident added!' });
    onClose();
  };

  return (
    <IncidentForm open={open} onClose={onClose} onSubmit={handleSubmit} />
  );
}

export default AddIncident;