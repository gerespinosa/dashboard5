import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const TransactionsList = ({ transactions }) => {

  const rows = transactions.map((transaction, index) => ({
    id: index,
    ...transaction
  }));

  const columns: GridColDef[] = [
    { field: 'desc', headerName: 'Description', width: 300,  },
    { field: 'category', headerName: 'Category', width: 300 },
    { 
        field: 'amount', 
        headerName: 'Amount', 
        width: 100,
        valueFormatter: (params) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(params),
    },
    { 
        field: 'createdAt', 
        headerName: 'Created at', 
        width: 300,
        valueFormatter: (params) => new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(params))
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default TransactionsList;
