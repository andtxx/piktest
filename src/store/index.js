import api from '../../api/products.js'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [],
		cartItems: [],
		currency: 'VGTB',
	},
	mutations: {
		setProducts(state, products) {
			state.products = products
		},
		addToCart(state, payload) {
			const existItem = state.cartItems.find((item) => item.id === payload.id)
			if (existItem) return (existItem.quantity += payload.quantity)
			state.cartItems.push({
				id: payload.id,
				title: payload.title,
				price: payload.price,
				quantity: payload.quantity,
			})
		},
		deleteFromCart(state, id) {
			state.cartItems = state.cartItems.filter((item) => item.id !== id)
		},
	},
	actions: {
		async updateProducts(ctx) {
			const products = await api.getProductsList()
			ctx.commit('setProducts', products)
		},
	},
})
