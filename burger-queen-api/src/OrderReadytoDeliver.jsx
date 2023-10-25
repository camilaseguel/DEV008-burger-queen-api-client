import { useEffect, useState } from "react"

//El mesero debe de ver las ordenes que ya estan listas 
import { orderReady } from "./apiRequests"
import { getOrders } from "./apiRequests"

export function OrderReadytoDeliver(){

const [deliver, setDeliver] = useState([])

useEffect(()=>{
    orderReady().then((result)=>{
        console.log(result)
    })
})

    return(
        <>
        
        
        </>
    )
}