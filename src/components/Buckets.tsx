import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Divider, Box, LinearProgress } from '@mui/material';
import { api } from '../services/api';

const allocationColors = ["#3aafa9", "#fe5f55", "#ffd700", "#5398be"];

const Buckets: React.FC<{ showOverview?: boolean }> = ({ showOverview }) => {
  const [buckets, setBuckets] = useState<any[]>([]);
  const [salary, setSalary] = useState<number>(0);

  useEffect(() => {
    api.getBuckets().then(setBuckets);
    api.getUser().then(u => setSalary(u.salary ?? 0));
  }, []);

  if (!buckets.length) return <Typography>Loading buckets...</Typography>;
  const allocated = buckets.reduce((s, b) => s + b.amount, 0);

  return (
    <Box>
      {showOverview && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" mb={1}>Salary Overview</Typography>
            <Typography mb={1}>Monthly Salary: ₹{salary.toLocaleString()}</Typography>
            <Typography mb={1}>Allocated: ₹{allocated.toLocaleString()}</Typography>
            <LinearProgress variant="determinate" value={allocated / salary * 100} sx={{ height: 10, borderRadius: 3 }} />
            <Typography my={1} color={allocated === salary ? 'green' : (allocated > salary ? 'error' : 'text.secondary')}>
              {allocated === salary
                ? 'Fully allocated'
                : allocated > salary
                ? 'Over-allocated!'
                : `${Math.round(allocated / salary * 100)}% allocated`}
            </Typography>
          </CardContent>
        </Card>
      )}
      <Grid container spacing={2}>
        {buckets.map((b, i) => (
          <Grid item xs={12} md={6} key={b.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ color: allocationColors[i % allocationColors.length] }}>{b.name}</Typography>
                <Divider sx={{ my: 1 }} />
                <Typography>Type: {b.type}</Typography>
                <Typography>Amount: ₹{b.amount.toLocaleString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Buckets;
