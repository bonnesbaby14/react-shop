import React from 'react';
import useGetProducts from '../hooks/useGetProducts';

import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';


const ProductList = () => {

	const products = useGetProducts();

	return (
		<section className="main-container">
			<div className="ProductList">
	
				{products.map(product => (<ProductItem product={
					product
				} key={
					product.id
				} />))}
			</div>
		</section>
	);
}

export default ProductList;
