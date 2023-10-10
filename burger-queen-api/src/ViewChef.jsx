import { ProductList } from "./ProductList";
import { ProductWaiter } from "./ProductWaiter";
import { getOrders } from "./apiRequests";

import { useState, useEffect } from "react";

export function ViewChef() {
    const [view, setView] = useState([])

    useEffect(() => {
        getOrders().then((result) => {
            console.log(result)
            setView(result); // Almacena los resultados en el estado
        });
    }, []);


    return (
        <>
            <header className="title-viewchef">
                <h2>Orders to prepare</h2>
            </header>
            <section className="container-list-order">
                <ul>
                    <li>

                    </li>
                </ul>

            </section>

        </>
    )
}