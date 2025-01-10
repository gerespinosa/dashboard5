import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import axios from 'axios';

const TransactionsList = ({ transactions }) => {

  const params = useParams()
  const userId = params.userid

  // Delete transactions
  async function handleDelete(transactionId:string){
 
    const res = await axios.delete(`/api/${userId}/transaction/delete`, {
      data: { transactionId },
    })

    if(res.status === 200){
      window.location.reload()
    } else {
      console.log("Transaction not deleted at all")
    }
  }

  async function handleEdit() {
    console.log("hola")
  }

  const rows = transactions.map((transaction, index) => ({
    id: index,
    ...transaction,
    
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
    {
      field: 'actions',
      headerName: 'Edit / Delete',
      width: 150,
      renderCell: (params) => (
        <div className='h-full flex gap-2'>
          <Image src='/icons/edit.svg'
           width={16}
           height={16}
           alt='edit'
           className='my-auto cursor-pointer'
           onClick={handleEdit} />
          <Image src='/icons/delete.svg'
           width={16}
           height={16}
           alt='delete'
           className='my-auto cursor-pointer'
           onClick={() => handleDelete(params.row._id)} />
        </div>
      )
    }
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
