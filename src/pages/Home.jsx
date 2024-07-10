import React ,{ useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Box from "../components/Box";
import "./home.css";
import axios from 'axios'
import Button from "../components/Button";

export default function Home() {
  const [details,Setdetails] =useState({})
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) ||[])
  
console.log(bookmarks);

const nextQuote = () => {
  axios.get('https://api.quotable.io/quotes/random').then((response)=> {
    console.log(response.data[0]);
    Setdetails(response.data[0])
  }
  )
}
useEffect(()=>{
  axios.get('https://api.quotable.io/quotes/random').then((response)=> {
    console.log(response.data[0]);
    Setdetails(response.data[0])
})
},[])

const bookmark = () => {
  setBookmarks([...bookmarks,details])
}



useEffect(()=>{
  localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
},[bookmarks])

  return (
    <div className="main">
      <Navbar />
      <div className="content">
      <div className="box">{details.content}
       
        <div className='alb'>{details.author} </div>
        <div className="mark" onClick={bookmark}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  fill="currentColor"
  className="bi bi-bookmark-plus-fill"
  viewBox="0 0 20 20"
>
  <path
    fillRule="evenodd"
    d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"
  />
</svg></div>


    </div>
        <br/><br/>
        <button type="button" className="btngreen" onClick={nextQuote}>
  Next Quote
</button>
      </div>
    </div>
  );
}
