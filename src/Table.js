import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function DenseTable(props) {

  const classes = useStyles();
    useEffect(()=>{
    },[props])

  return (
    <div style={{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <TableContainer component={Paper} style={{width:"1200px"}}>
        {/* {
            props.data.map(product)
        } */}
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Product name</TableCell>
            <TableCell align="right">category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Tax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              {row.item}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.discount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCell align="right"></TableCell>
        <TableCell align="right" >
        Total
        </TableCell>
        <TableCell align="right">{props.priceTotal}</TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>

        
      </Table>
    </TableContainer>
    </div>
  );
}
