import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

function IncidentForm({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    onSubmit({ title, details });
    setTitle('');
    setDetails('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Incident</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Details"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default IncidentForm;