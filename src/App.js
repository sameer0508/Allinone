import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, TextField} from '@material-ui/core'
import Table from './Table'
import { useEffect, useRef, useState } from 'react';
import DenseTable from './Table';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function App() {
  const initialstate = {item:'',category:"",Price:'',quantity:'',discount:''};
  const [product,setproduct]=useState(initialstate);
  const [inventory, setinventory] = useState([]);
  const classes = useStyles();
  const [total, settotal] = useState(0);

  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off">
        <h1>All in one store</h1>
        <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}}>
        <TextField type='text' id="standard-basic" value={product.item} label="Item Name" onChange={(e)=>
        {
          setproduct({...product,item:e.target.value})
        }} />
        <TextField id="standard-basic" type='number' value={product.quantity} label="Quantity" onChange={(e)=>
        {
          setproduct({...product,quantity:e.target.value})
        }}/>
                <TextField id="standard-basic" value={product.Price} type="number" label="Price" onChange={(e)=>
        {
          setproduct({...product,Price:e.target.value})
        }}/>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.category}
          onChange={(e)=>
            {
              switch(e.target.value)
              {
                case "Medicine":
                  setproduct({...product,category:"Medicine",discount:5})
                

                  break;
                case "Cloths":
                  if(product.Price<=1000)
                  {
                    setproduct({...product,category:"Cloths",discount:5})
              

                  }
                  else
                  {
                    setproduct({...product,category:"Cloths",discount:12})
              

                  }
                  break;
                case "Food":
                  setproduct({...product,category: "Food",discount:5})
              

                  break;
                case "Imported":
                  setproduct({...product,category: "Imported",discount:18})
              

                  break;

              }
            }}
        >
          <MenuItem value="Medicine" >Medicine</MenuItem>
          <MenuItem value="Cloths">Cloths</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Imported">Imported</MenuItem>
        </Select>
      </FormControl>
        <TextField id="standard-basic" type="Tax" label="Tax" value={product.discount} disabled/>
          <Button  variant="contained" color="primary" onClick={()=>
          {
            setinventory(invent=>[...invent,product])
            settotal(parseInt(product.Price)+parseInt((product.Price*product.discount)/100)+parseInt(total))
            setproduct(initialstate)
          }} style={{height:"30px"}}>
            Add to list
          </Button>
        </div>
        <DenseTable data = {inventory} priceTotal={total}/>
        </form>
    </div>
  );
}

export default App;
