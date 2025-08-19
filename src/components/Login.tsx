import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('alex.doe@example.com');
  const [password, setPassword] = useState('demo');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      await api.login(email, password);
      navigate('/dashboard');
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  return (
    <Box display="flex" alignItems="center" height="100vh" justifyContent="center">
      <Paper elevation={4} sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={2}>LUMO — Sign in</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Email" fullWidth margin="normal" 
            value={email} onChange={e => setEmail(e.target.value)} />
          <TextField 
            label="Password" fullWidth type="password" margin="normal"
            value={password} onChange={e => setPassword(e.target.value)} />
          {error && <Typography color="error" fontSize={14}>{error}</Typography>}
          <Button
            variant="contained" color="primary" size="large"
            fullWidth type="submit" disabled={loading}
            sx={{ mt: 2 }}>{loading ? "Signing in..." : "Sign In"}</Button>
        </form>
      </Paper>
    </Box>
  );
};
export default Login;
