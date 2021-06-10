import React from 'react';

const Item = props => {
  const handleClick = () => {
    props.removeItem();
  };
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleClick}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
