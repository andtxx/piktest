const SLEEP_TIME = 500
function sleep(fn) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(fn())
		}, SLEEP_TIME)
	})
}

const dataService = {
	getProductsList() {
		let products = [
			{
				id: 'potato',
				title: 'Картошка',
				price: 49.99,
				image: '/products/potato.jpg',
			},
			{
				id: 'carrot',
				title: 'Морковка',
				price: 55.0,
				image: '/products/carrot.jpg',
			},
			{
				id: 'cabbage',
				title: 'Капуста',
				price: 28.5,
				image: '/products/cabbage.jpg',
			},
		]
		return products
	},
}

const productsApi = {
	getProductsList() {
		return sleep(dataService.getProductsList)
	},
}
export default productsApi
