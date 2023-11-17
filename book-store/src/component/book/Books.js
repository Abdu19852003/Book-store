import React, { useEffect, useState } from 'react'
import "./Book.css"

import axios from "axios";
import Book from './Book';






const fetchHandler=async()=>{
   return await axios.get("/books").then((res)=>res.data)

}

const Books=()=>{
    const [books,setBooks]=useState()
    useEffect(()=>{
        fetchHandler().then((data)=>{
            // console.log(data)
            setBooks(data.book);
        });
        
    },[])
    console.log(books);
    const handleBookDelete = (deletedBookId) => {
        // Filtere das gelöschte Buch aus der State-Variable books
        setBooks(prevBooks => prevBooks.filter(book => book._id !== deletedBookId));
      }
    
   
    
    return <div>
        <ul>
      {books && books.map((book, i) => (
        <li className='book' key={i}>
          {/* Die onBookDelete-Prop wird an Book-Komponente übergeben */}
          <Book book={book} onBookDelete={handleBookDelete} />
        </li>
      ))}
    </ul>
    </div>
    
}
export default Books