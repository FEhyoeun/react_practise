import React, { useState } from 'react';
import Products from "./components/Products";

function AppProducts() {
  const [isShowProduct, setIsShowProduct] = useState(false)

  return (
    <>
      {isShowProduct && <Products/>}
      <button onClick={() => setIsShowProduct((isShow) => !isShow)}>Toggle</button>
    </>
  );
}

export default AppProducts;