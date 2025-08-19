import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const KYCOnboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate('/dashboard');
  };

  return (
    <Box display="flex" alignItems="center" height="100vh" justifyContent="center">
      <Paper sx={{ p: 4, minWidth: 370 }}>
        <Typography variant="h6" gutterBottom>Complete Your KYC</Typography>
        <Typography mb={2}>Upload ID, connect bank account, verify PAN.</Typography>
        <Button 
          variant="contained" color="primary" fullWidth 
          onClick={handleComplete}>Complete KYC (Simulated)</Button>
      </Paper>
    </Box>
  );
};
export default KYCOnboarding;
