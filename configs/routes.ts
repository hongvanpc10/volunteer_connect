const routes = {
	logIn: '/log-in',
	signUp: '/sign-up',
	home: '/',
	about: '/about',
	explore: {
		default: '/explore',
		organizations: '/explore/organizations',
		works: 'explore/works',
	},
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
	newWork: '/new-volunteer-work',
	volunteerWorks: {
		gen: (id?: string) => `/volunteer-works/${id}`,
		default: '/volunteer-works',
	},
	settings: '/settings',
}

export default routes
