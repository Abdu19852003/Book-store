import Header from "./component/Header";
import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import AddBook from "./component/AddBook";
import About from "./component/About";
import Books from "./component/book/Books";
import BookDetail from "./component/book/BookDetail";



function App() {
  return <React.Fragment>
  <header>
    <Header/>
  </header>
  <main>
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/add" element={<AddBook/>} exact/>
      <Route path="/books" element={<Books/>} exact/>
      <Route path="/about" element={<About/>} exact/>
      <Route path="books/:id" element={<BookDetail/>} exact/> 



    </Routes>
  </main>



  </React.Fragment>
}

export default App;
