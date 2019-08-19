import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { editCurrent , editModifyFlag, removeMobile } from '../../redux/actions';
import { connect } from 'react-redux';
import Axios from 'axios';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(6),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

function CustomizedTables(props) {
  const classes = useStyles();
  const rows = props.mobiles;
  const {flags} = props;

  const handleOfEdit = (e) => {
    const {id} = e.target;
    const findinlist = rows.find(obj => {return obj._id === id} );
    props.dispatch(editCurrent({
      phoneId : e.target.id,
      phone : findinlist.name,
      phoneCpu : findinlist.cpu,
      phoneRam : findinlist.ram,
      phoneCamera : findinlist.camera,
      phoneBattery : findinlist.battery,
      ImgPreview : findinlist.image,
    }));
    props.dispatch(editModifyFlag({
      modify : true,
      formButton : "secondary",
      formButtonTittle : "Edit Product"
    }));
  }

  const handleOfRemove = (e) =>{
    
    if(flags.modify === false){
      const {id} = e.target;
      const newList = rows.filter( obj => {return obj._id !== id} );
      Axios({
        url : 'http://localhost:3030/api/v1/mobile/' + id,
        method : 'delete',
        headers : {'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWQ0ZmIwNWFjYWU2NzAyNWE0MzFhNjkxIiwiaWF0IjoxNTY1OTQ5MDc3fQ.BudhCMhxj9yISeo_LRpqCTWkXM92tPlSHno_HeK3eUc'}
      }).then(res => {
        console.log(res);
        props.dispatch(
          removeMobile(newList)
        )
      })
    }else{
      alert('این ردیف در حال ویرایش است')
    }
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">thumbnail</StyledTableCell>
            <StyledTableCell align="center">Mobile Name</StyledTableCell>
            <StyledTableCell align="right">CPU</StyledTableCell>
            <StyledTableCell align="right">RAM</StyledTableCell>
            <StyledTableCell align="right">Camera</StyledTableCell>
            <StyledTableCell align="right">Battery</StyledTableCell>
            <StyledTableCell align="right">Options</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row , id) => (
            <StyledTableRow key={id}>
              <StyledTableCell align="right">
                <img src={row.image} style={{width: '50px',height: '50px'}}  alt=""/>              
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cpu}</StyledTableCell>
              <StyledTableCell align="right">{row.ram}</StyledTableCell>
              <StyledTableCell align="right">{row.camera}</StyledTableCell>
              <StyledTableCell align="right">{row.battery}</StyledTableCell>
              <StyledTableCell align="right">
                <i className="far fa-edit mr-2 Table-i-edit"
                    onClick={handleOfEdit}
                    id={row._id}></i>
                <i className="far fa-trash-alt Table-i-remove" 
                    onClick={handleOfRemove}
                    id={row._id} 
                    ></i>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default connect()(CustomizedTables);
