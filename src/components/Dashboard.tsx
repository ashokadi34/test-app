import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Tabs, Tab, Paper } from '@mui/material';
import Buckets from './Buckets';
import Transactions from './Transactions';
import Profile from './Profile';

const Dashboard: React.FC = () => {
  const [tab, setTab] = React.useState(0);

  const handleLogout = () => {
    localStorage.removeItem('mock_user');
    window.location.href = '/login';
  };

  return (
    <Box>
      <AppBar position='static' color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>LUMO Dashboard</Typography>
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Paper sx={{ mx: 'auto', mt: 4, p: 3, maxWidth: 720 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} centered>
          <Tab label="Overview" />
          <Tab label="Buckets" />
          <Tab label="Transactions" />
          <Tab label="Profile" />
        </Tabs>
        <Box mt={2}>
          {tab === 0 && <Buckets showOverview />}
          {tab === 1 && <Buckets />}
          {tab === 2 && <Transactions />}
          {tab === 3 && <Profile />}
        </Box>
      </Paper>
    </Box>
  );
};
export default Dashboard;
