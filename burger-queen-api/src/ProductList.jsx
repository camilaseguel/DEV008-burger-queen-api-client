import { Link } from "react-router-dom"
import { orders } from "./apiRequests"
import { Breakfast } from "./Breakfast"
import { Lunch } from "./Lunch"
import { useEffect } from "react"

export function ProductList() {

    useEffect(() => {
        orders().then((result) => {
            console.log(result)
        })
    }, [])


    return (
        <>
            <h2>BurgerQueen</h2>
            <Breakfast />
            <Lunch />
        </>
    )
}