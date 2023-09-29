export function ProductAdmin() {

  return (
    <>
      <header className="title-productlist">
        <h2>BurgerQueen. Product List</h2>
      </header>
      <div className="bar-name-product">
        <button className="btn-create-product">Create New Product</button>
      </div>
      <section className="header-productlist">
        <div className="header-productlist-item">Name Product</div>
        
        <div className="header-productlist-item">Type</div>
        <div className="header-productlist-item">Price</div>
        <div className="header-productlist-item">Image</div>
        <div className="header-productlist-item">Add</div>
        <div className="header-productlist-item">Delete</div>
      </section>

    </>
  )
}