import fetch from './fetch' 

//商品列表
export function fetchGoodList(params) {
	return fetch({
		method: 'GET',
		params: params,
		url: '/youzan/getGoodList'
	})
}

//登录
export function fetchLogin(data) {
	return fetch({
		method: 'Post',
		data: data,
		url: '/youzan/login'
	})
}