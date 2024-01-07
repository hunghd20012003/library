import express from 'express'
import passport from 'passport';
import fs from 'fs'
import { User } from '../models/schema.js';
const router = express.Router();
router.get("/login/success", (req, res) => {
	if (req.user) {
		User.findOne({_id:req.user}).then((user)=>{
			res.status(200).json({
				error: false,
				message: "Successfully Loged In",
				user: {
					id:user._id,
					name:user.name,
					penaltyNumber:user.penaltyNumber,
					isChecked:user.isChecked,
					isMember:user.isMember,
					avatar:user.avatar,
					googleId:user.googleId,
					facebookId:user.facebookId
				},
			});
		})
		
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
		successRedirect: "http://localhost:4000",
		failureRedirect: "/login/failed",
	})
);
router.get('/facebook',passport.authenticate("facebook"));
router.get('/facebook/library',
  passport.authenticate('facebook', { 
	successRedirect: "http://localhost:4000",
		failureRedirect: "/login/failed",
	})
);
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://localhost:4000");
});
export default router;