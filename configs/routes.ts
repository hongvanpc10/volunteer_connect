const routes = {
	logIn: '/log-in',
	signUp: '/sign-up',
	home: '/',
	about: '/about',
	explore: '/explore',
	news: '/news',
	community: '/community',
	forgetPassword: '/forget-password',
	activeAccount: '/active-account',
	profile: {
		gen: (id?: string) => `/profile/${id}`,
	},
}

export default routes
