// import { useState } from "react"
// import { ProductList } from "./ProductList"
// import { ProductWaiter} from './ProductWaiter'


// export function OrderWaiter() {

//     const [order, setOrder] = useState({
//         clientName: "",
//         products: [],
//     });

//     // const handleAdd = (product) => {
//     //     setOrder({
//     //         ...order, products: [...order.products, { product: product, qty: 1, }]
//     //     })
//     // }



//     return (
//         <>
//             <div className='orderWaiter'>
//                 <label className='label-order' >Client Name</label>
//                 <input type='text' className='input-order' placeholder='client name'></input>
//                 <label className='label-order'>N°Table</label>
//                 <input type='text' className='input-order' placeholder='number table'></input>
//             </div>

//             <ul className='container-order'>
//                 {order.products.map((orderItem) => {
//                     return <li>
//                         {orderItem.product.name} ({orderItem.qty}) Price:{orderItem.product.price} account:

//                     </li>
//                 })}
//             </ul>
//         </>
//     )
// }