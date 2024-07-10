import React, { useState } from 'react'
import './bookmark.css'
import Navbar from '../components/Navbar'
import Box from '../components/Box'
import { json } from 'react-router-dom'

export default function 
() {
  const [quotes,setQuotes]=useState(JSON.parse(localStorage.getItem('bookmarks')) ||[])
  console.log(quotes);
  return (
    <div>
        <Navbar/>
        <div className='card'>
{quotes.map((value,index)=>(
 <div className="box">{value.content}
       
 <div className='alb'>-{value.author} </div>  
    
  </div>
))}

       

    </div>
    </div>
  )
}
