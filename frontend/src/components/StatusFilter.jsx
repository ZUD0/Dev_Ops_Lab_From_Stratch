import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function StatusFilter({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 120, mb: 2 }}>
      <InputLabel>Status</InputLabel>
      <Select value={value} label="Status" onChange={onChange}>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Open">Open</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Resolved">Resolved</MenuItem>
      </Select>
    </FormControl>
  );
}

export default StatusFilter;