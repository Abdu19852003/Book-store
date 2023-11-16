import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Box display={"flex"} flexDirection="column" alignItems={"center"}>
       <Button LinkComponent={Link} to="/books" sx={{marginTop:15,background:"orangered"}}variant='contained' >
        <Typography variant='h3'> View All products</Typography>
       </Button>
        </Box>
        </div>
  )
}

export default Home

//{




// "name":"The Green Mile  ",
 



// "author":"  Stephen King  ",



// "description":"This is the Description 3",



// "price":40,



// "available":true,
// "image":"https://m.media-amazon.com/images/I/71RjQDD8X4L._SL1000_.jpg"

// }