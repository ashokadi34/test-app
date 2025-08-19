import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material';
import { api } from '../services/api';

const Transactions: React.FC = () => {
  const [txs, setTxs] = useState<any[]>([]);
  useEffect(() => { api.getTransactions().then(setTxs); }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Recent Transactions</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {txs.map(tx => (
            <TableRow key={tx.id}>
              <TableCell>{tx.date}</TableCell>
              <TableCell>{tx.description}</TableCell>
              <TableCell>{tx.type}</TableCell>
              <TableCell align="right">{tx.type === 'debit' ? '-' : ''}₹{tx.amount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default Transactions;
