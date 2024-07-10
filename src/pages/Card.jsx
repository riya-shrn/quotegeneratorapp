import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./card.css"


export default function Card() {
const [cards,setCard]=useState([])
console.log(cards);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        console.log(response.data)
        setCard(response.data)

    })
},[])

  return (
    
     <>
     {cards.map((value,index)=>(
        <div className='card1'>
        <div className='id'>{value.id} </div>
        <div className='title'>{value.title} </div>
        </div>
     ))}
    </>
   
  )
}
