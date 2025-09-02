import { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Snackbar } from '@mui/material';
import Dashboard from './pages/Dashboard.jsx';
import AddIncident from './pages/AddIncident.jsx';

function App() {
  const [openAdd, setOpenAdd] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Incident Tracker
          </Typography>
          <Button color="inherit" onClick={() => setOpenAdd(true)}>
            Add Incident
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Dashboard setSnackbar={setSnackbar} />
      </Container>
      <AddIncident open={openAdd} onClose={() => setOpenAdd(false)} setSnackbar={setSnackbar} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
      />
    </>
  );
}

export default App;