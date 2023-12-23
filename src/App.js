import React from "react"
import { useState,useEffect } from "react"


const App=()=>{
  const[data,setdata]=useState([])
  const fetchusers=async()=>{
  try{
  const response=await fetch("data.json")
  const result=await  response.json()
  setdata(result)
  console.log(result)
  
  } catch(error){
    console.log("error fetching data ",error)
  }
 }  
 useEffect(()=>{
    fetchusers()
 },[])

 
      return(
        <div>
          <h1>hi</h1>

        </div>
      )
}

export default App;
