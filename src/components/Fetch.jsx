import React, { useEffect, useState } from 'react'
import axios from "axios"

const Fetch = (url) => {
    const [input,setInput]=useState(null)
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then((data)=>setInput(data))
    },[]
    )
return (
    [input]
)
}

export default Fetch