import React, { useEffect, useState } from 'react';

function Products() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [checked, setChecked] = useState(false)
  const handleChange = () => setChecked((prev) => !prev)

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
    return () => {
      console.log('unmounted')
    }
  }, [checked]);

  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange}/>
      <label htmlFor='checkbox'>Show Only Hot Sale</label>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      )
    </>
  );
}

export default Products;