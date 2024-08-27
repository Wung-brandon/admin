import './datatable.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumn } from './datatableSource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Datatable() {

  const [data, setData] = useState(userRows)

  function handleDelete(row){
      setData(data.filter((item) => item.id !== row.id))
  }

    const actionColumn = [
      {field:"action", headerName:"Action", width:200,
        renderCell: (params) => {
          return(
            <div className='cellAction'>
               <Link to='/users/test' style={{textDecoration:"none"}}>
                <div className="viewBtn">view</div>
                </Link>
                <div className="deleteBtn" onClick={() => handleDelete(params.row)}>delete</div>
            </div>
          )
        }
      }
    ]
  return (
    <div className='datatable'>
      <div className="dataTitle">
        Add New User
        <Link to='/users/new' className='link'>
          Add New
        </Link>
      </div>
       <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumn.concat(actionColumn)}
        style={{textTransform:'capitalize'}}
        pageSize={[9]}
        rowserPageOptions={[9]}
        // pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
