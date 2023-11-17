import { FormLabel, TextField,Button, FormControlLabel, Checkbox } from '@mui/material'
import {Box} from "@mui/system"
import axios from "axios"

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {
  const history=useNavigate()
  const[inputs,setInputs]=useState({
    name:"",
    description:"",
    price:"",
    author:"",
   
    image:""
    
  })
  const[checked,setChecked]=useState(false)

  const handelChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
      
    }))
    // console.log(e.target.name,"value",e.target.value);
  }

  const sendRequest=async()=>{
     await axios.post("/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data)
  }

  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history("/book-store"))
  }
  return <form onSubmit={handelSubmit}>
    <Box 
    display="flex" 
    flexDirection="column" 
    justifyContent={"center"} 
    maxWidth={700}
     alignContent={"center"} 
     alignSelf={"center"}
     marginLeft={"auto"}
     marginRight={"auto"}
     marginTop={10}
     >
    
      <FormLabel>Name</FormLabel>
<TextField value={inputs.name} onChange={handelChange} margin='normal' fullWidth  variant='outlined' name='name'/>
<FormLabel>Author</FormLabel>
<TextField  value={inputs.author} onChange={handelChange} margin='normal' fullWidth  variant='outlined' name='author'/>
<FormLabel>Description</FormLabel>
<TextField value={inputs.description} onChange={handelChange}  margin='normal' fullWidth  variant='outlined' name='description'/>
<FormLabel>Price</FormLabel>
<TextField value={inputs.price} onChange={handelChange} type='number' margin='normal' fullWidth  variant='outlined' name='price'/>
<FormLabel>image</FormLabel>
<TextField value={inputs.image} onChange={handelChange} margin='normal' fullWidth  variant='outlined' name='image'/>


<FormControlLabel control={<Checkbox checked={checked}  onChange={()=>setChecked(!checked)} />} label="Available" />

<Button type="submit" variant="contained">Add Book</Button>
</Box>

    </form>
  
}

export default AddBook