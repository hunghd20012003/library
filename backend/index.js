import express from "express"
import bodyParser from "body-parser"
import passport from "passport"
import cookieSession from "cookie-session"
import logins from './routers/logins.js'
import dotenv from 'dotenv';
import auth from "./routers/auth.js"
 import mongoose  from "mongoose"
 import cors from 'cors'
 import { User } from "./models/schema.js"
 import { Strategy as GoogleStrategy } from "passport-google-oauth20";
 import  FacebookStrategy from 'passport-facebook'
 dotenv.config();
const app = express();
const port = 5000;

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/library",
			scope: ["profile", "email"],
		},
        async function (accessToken, refreshToken, profile, callback) {
            try {
                // Tìm kiếm người dùng trong cơ sở dữ liệu bằng Google ID
                const existingUser = await User.findOne({ googleId: profile.id });
        
                if (existingUser) {
                  
                  return callback(null, existingUser);
                }
        
                // Nếu người dùng không tồn tại, tạo một bản ghi mới
                const newUser = await User.create({ googleId: profile.id });
        
                // Gọi callback để tiếp tục quá trình xác thực
                return callback(null, newUser);
              } catch (err) {
                // Xử lý lỗi nếu có
                return callback(err, null);
              }
			callback(null, profile);

		}
	)
);
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/library"
  },
  async function (accessToken, refreshToken, profile, callback) {
	try {
		// Tìm kiếm người dùng trong cơ sở dữ liệu bằng Google ID
		const existingUser = await User.findOne({ facebookId: profile.id });

		if (existingUser) {
		  
		  return callback(null, existingUser);
		}

		// Nếu người dùng không tồn tại, tạo một bản ghi mới
		const newUser = await User.create({ facebookId: profile.id });

		// Gọi callback để tiếp tục quá trình xác thực
		return callback(null, newUser);
	  } catch (err) {
		// Xử lý lỗi nếu có
		return callback(err, null);
	  }
	callback(null, profile);

}
));
passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://hoangdinhhung20012003:hust20210399@cluster1.ixp6j2h.mongodb.net/").then(()=>{console.log("thành công")}).catch(()=>{console.log("Thất bại")});
app.use("/logins",logins);
app.use("/auth",auth);
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});