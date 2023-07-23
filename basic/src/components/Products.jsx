import React, { useEffect, useState } from 'react';

function Products() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
    return () => {
      console.log('unmounted')
    }
  }, []);

  return (
    <>
      {products.map((product) => (
        <ul key={product.id}>
          <article>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </article>
        </ul>
      ))}
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

export default Products;