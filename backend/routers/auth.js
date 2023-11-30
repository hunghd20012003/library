import express from 'express'
import passport from 'passport';
const router = express.Router();
router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Log in failure",
	});
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));
router.get(
	"/google/library",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000/homepage",
		failureRedirect: "/login/failed",
	})
);
router.get('/facebook',passport.authenticate('facebook'));
router.get('/facebook/library',
  passport.authenticate('facebook', { 
	successRedirect:"http://localhost:3000/homepage",
	failureRedirect: '/login/failed' }),
);
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://localhost:3000");
});
export default router;