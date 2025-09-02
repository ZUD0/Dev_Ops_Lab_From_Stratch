import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIncident, updateIncident } from '../api/incident.js';
import { Card, CardContent, Typography, Select, MenuItem, CircularProgress, Box } from '@mui/material';

function IncidentDetails({ setSnackbar }) {
  const { id } = useParams();
  const [incident, setIncident] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncident(id).then((data) => {
      setIncident(data);
      setLoading(false);
    });
  }, [id]);

  const handleStatusChange = async (e) => {
    const status = e.target.value;
    const updated = await updateIncident(id, status);
    setIncident(updated);
    if (setSnackbar) setSnackbar({ open: true, message: 'Status updated!' });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!incident) {
    return <Typography variant="h6" color="error">Incident not found.</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5">{incident.title}</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>{incident.details}</Typography>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Created: {new Date(incident.created_at).toLocaleString()}
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Updated: {new Date(incident.updated_at).toLocaleString()}
        </Typography>
        <Select
          value={incident.status}
          onChange={handleStatusChange}
          sx={{ mt: 2, minWidth: 150 }}
        >
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
        </Select>
      </CardContent>
    </Card>
  );
}

export default IncidentDetails;