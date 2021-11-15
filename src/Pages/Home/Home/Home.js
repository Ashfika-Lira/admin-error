import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Products></Products>
			<Features></Features>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;