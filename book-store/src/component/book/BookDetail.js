import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Button } from '@mui/material';

const BookDetail = () => {
    const [inputs,setInputs]=useState({})
    const id=useParams().id
    const [checked,setChecked]=useState(false)
    const history=useNavigate()

    
    useEffect(()=>{
        const fetchHandler=async()=>{
            await axios
            .get(`http://localhost:6500/books/${id}`)
            .then((res)=>res.data).then(data=>setInputs(data.book))
        }
        fetchHandler()
    },[id])

    const sendRequest= async()=>{
        await axios.put(`http://localhost:6500/books/${id}`,{
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
        sendRequest().then(()=>history("/books"))
    }
    const handelChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
            
          }))
       
    }
    
  return (
    <div>
       {inputs &&  <form onSubmit={handelSubmit}>
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

<Button type="submit" variant="contained">Update Book</Button>
</Box>

    </form>}
    </div>
  )
}

export default BookDetail