"use client"
import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  const data:string[] = ["marwa nasir","maha yasmin","tayyba nusrat","sehr hyat","wafa fatima"]
  const [index, setIndex] = useState<number>(0)
  const[name, setname] = useState("marwa nasir")
  
  const nextvalue=()=>{
      var nextdata = (index+1)%data.length;
      setIndex(nextdata)
      setname(data[nextdata])
  }
   const perv=()=>{
    var pervalue = (index-1+data.length)%data.length;
    setIndex(pervalue)
    setname(data[pervalue])
   }
  
  return (
    <main>
     <button onClick={nextvalue}>Next</button>
     <h1>{name}</h1>
     <button onClick={perv}>Pervious</button>

    </main>
  )
}
