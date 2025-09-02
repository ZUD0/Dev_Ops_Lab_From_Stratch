import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

function IncidentList({ incidents, onSelect, onDelete }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {incidents.map((incident) => (
          <TableRow key={incident.id}>
            <TableCell>{incident.title}</TableCell>
            <TableCell>{incident.status}</TableCell>
            <TableCell>{new Date(incident.created_at).toLocaleString()}</TableCell>
            <TableCell>
              <IconButton onClick={() => onSelect(incident.id)}>
                <InfoIcon />
              </IconButton>
              <IconButton color="error" onClick={() => onDelete(incident.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default IncidentList;