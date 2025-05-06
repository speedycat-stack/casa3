import React from 'react';
import Header from '../components/Header/Header';
import Product from '../components/Products/Product';
import bgProduct from '../assets/sleep.png';

const ProductP = () => {
  return (
    <>
      <Header
        variant="Light"
        bgImage={bgProduct}
        showHero={true}
        customTitle="PRODUCT"
      />
      <Product />
    </>
  );
};

export default ProductP;
