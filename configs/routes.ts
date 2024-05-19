
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
	organizations: {
		gen: (id?: string) => `/organizations/${id}`,
		default: '/organizations',
	},
}


export default routes
