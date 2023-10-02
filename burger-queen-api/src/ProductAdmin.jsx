import { ProductList } from './ProductList'
import './ProductAdmin.css';

export function ProductAdmin() {

  
  return (
    <>
      <header className="title-productAdmin">
        <h2>Product List/ADMIN</h2>
        <button className="btn-create-product">Create New Product</button>
      </header>
      <div className='container-product'>
      <table >
        <thead>
          <tr className='title-header'>
            <th className='columns'>Name</th>
            <th className='columns'>Type</th>
            <th className='columns'>Price</th>
            <th className='columns'>Image</th>
            <th className='columns'>Add</th>
            <th className='columns'>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ProductList />
        </tbody>
      </table>
    </div >
    </>
  )
}