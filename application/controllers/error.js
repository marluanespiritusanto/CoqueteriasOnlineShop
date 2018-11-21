class ErrorController {
	notFoundPage(req, res) {
		return res
			.status(404)
			.render('404', { pageTitle: 'Page Not Found', path: '/404', isAuthenticated: req.session.isLoggedIn });
	}
}

module.exports = new ErrorController();
