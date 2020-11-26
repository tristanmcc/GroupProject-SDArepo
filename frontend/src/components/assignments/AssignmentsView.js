import React, {useEffect, useState } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";
import AssignmentsApi from '../../api/AssignmentsApi';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

const columns = [
    { id: 'title', label: 'Click on the Assignment to View it', minWidth: 150 , color: 'black', fontSize: 'calc(10px + 2vmin)'},
    { id: 'ICONS', label: '', minWidth: 150 , color: 'black', fontSize: 'calc(10px + 2vmin)'}
    
    ];



    function createData(title,Id) {
        
        return { title , Id};
      }
      

      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
        },
      });

function AssignmentsView()
{

    const handleDelete = ({assignId}) => 
    {
        console.log("inside delete"+assignId);
        AssignmentsApi.deleteAssignment(assignId)
            .then(response => {
                window.location.reload();
                
            });

    }


    const [rows, setRows] = useState([]);

    const viewAssignment = () => {
        console.log("Inside viewAssignment")
        AssignmentsApi.getAllAssignment()
            .then(response => {
                console.log("Response data" + response.data);
                const newArray = response.data.map(item => createData(item.assignmentTitle,item.id)
                );
                setRows(newArray);
                console.log(newArray);
                
            })
    }
    useEffect(() => {
        viewAssignment();


    }, []);


  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
        <div>
        <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
           
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color:column.color, fontSize: column.fontSize }}
                >
                  {column.label}
                </TableCell>
                ))}
                
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        const assignId = row['Id'];
                        return (
                            
                          <TableCell key={column.id} align={column.align}>
                          
                          <Link to={`/assignmentsView/${assignId}`}   className="link">
                            {column.format && typeof value === 'number' ? column.format(value) :  value}
                            
                            </Link>
                            
                            {column.id === 'ICONS' ? <DeleteIcon onClick={() => handleDelete({assignId})} /> : null}
                            
                           
                          </TableCell>
                          
                        );
                      })}
                    </TableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>

    <div className="card-header">
    <Link to="/assignmentsView" >
        <button
            className=" btn btn-info btn-sm">
            Add New Assignment
        </button>
    </Link>
    </div>
    </div>
    
      );
       

}

export default AssignmentsView;