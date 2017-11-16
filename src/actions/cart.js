//creates payload for reducers; addToCart is the function called when items are added to cart
export const addToCart = (item) => {
	console.log("adding item", item);
	return{
		type: 'add',
		item
	};
}