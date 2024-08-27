import './tables.scss'
import data from './dataRows'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TableComponent() {

   
  return (

    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell className='tablecell'>Tracking ID</TableCell>
            <TableCell className='tablecell' >product</TableCell>
            <TableCell className='tablecell'>customer</TableCell>
            <TableCell className='tablecell' >date</TableCell>
            <TableCell className='tablecell'>amount</TableCell>
            <TableCell className='tablecell' >payment method</TableCell>
            <TableCell className='tablecell'>status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tablecell'> {row.id} </TableCell>
              <TableCell className='tablecell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tablecell'>{row.customer}</TableCell>
              <TableCell className='tablecell'>{row.date}</TableCell>
              <TableCell className='tablecell'>{row.amount}</TableCell>
              <TableCell className='tablecell'>{row.method}</TableCell>
              <TableCell className='tablecell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  )
}

