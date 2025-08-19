import React, { useEffect, useState } from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';
import { api } from '../services/api';

const Profile: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => { api.getUser().then(setUser); }, []);

  if (!user) return <Typography>Loading profile...</Typography>;

  return (
    <Paper sx={{ p: 3, maxWidth: 400 }}>
      <Typography variant="h6" mb={1}>Profile Details</Typography>
      <Box mb={1}>Name: {user.name}</Box>
      <Box mb={1}>Email: {user.email}</Box>
      <Box mb={1}>
        KYC status:{' '}
        <Chip 
          label={user.kycStatus} 
          color={user.kycStatus === 'verified' ? 'success' : 'warning'}
        />
      </Box>
      <Box mb={1}>Salary profile: ₹{user.salary?.toLocaleString()}</Box>
    </Paper>
  );
};
export default Profile;
