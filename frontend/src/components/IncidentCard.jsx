import { Card, CardContent, Typography, Button, MenuItem, Select } from '@mui/material';

function IncidentCard({ incident, onUpdateStatus }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{incident.title}</Typography>
        <Typography color="text.secondary">{incident.details}</Typography>
        <Typography>Status: {incident.status}</Typography>
        <Typography variant="caption">
          Created: {new Date(incident.created_at).toLocaleString()}
        </Typography>
        <Select
          value={incident.status}
          onChange={(e) => onUpdateStatus(incident.id, e.target.value)}
          sx={{ mt: 2 }}
        >
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
        </Select>
      </CardContent>
    </Card>
  );
}

export default IncidentCard;