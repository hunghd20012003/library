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
 import books from './routers/books.js'
 import loans from './routers/loans.js'
 import addUsers from './routers/addUsers.js'
 import manageUsers from './routers/manageUsers.js'
 import purchasehistoryrouter from "./routers/purchaseHistorys.js";
import planRouter from "./routers/plans.js";
import userInfors from './routers/userInfors.js'
import { Bill } from "./models/schema.js"
import addNotification from "./routers/addnotifications.js"
import listNotification from "./routers/notifications.js" 
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
			console.log(profile)
            try {
                // Tìm kiếm người dùng trong cơ sở dữ liệu bằng Google ID
                const existingUser = await User.findOne({ googleId: profile.id });
         
                if (existingUser) {
					console.log("Đã xử lý");
                  return callback(null, existingUser._id);
                }
				
                // Nếu người dùng không tồn tại, tạo một bản ghi mới
                const newUser = await User.create({ 
					name:profile.displayName,
					email:profile.emails[0].value,
					password:"",
					googleId: profile.id,
			 		facebookId:"",
					penaltyNumber:0,
					isChecked:false,
					isMember:true,
					avatar:""
				 });
				 
                // Gọi callback để tiếp tục quá trình xác thực
                return callback(null, newUser._id);
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
	console.log(profile)
	try {
		// Tìm kiếm người dùng trong cơ sở dữ liệu bằng Google ID
		const existingUser = await User.findOne({ facebookId:profile.id});

		if (existingUser) {
		  
		  return callback(null, existingUser._id);
		}
		
		// Nếu người dùng không tồn tại, tạo một bản ghi mới
		const newUser = await User.create({ 
			name:profile.displayName,
			email:"",
			password:"",
			googleId: "",
			 facebookId:profile.id,
			penaltyNumber:0,
			isChecked:false,
			isMember:true,
			avatar:""
		  });
		return callback(null, newUser._id);
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
// const corsConfig4000 = {
// 	origin: 'http://localhost:4000',
// 	methods: 'GET,POST,PUT,DELETE',
// 	credentials: true,
//   };
  
//   const corsConfig3000 = {
// 	origin: 'http://localhost:3000',
// 	methods: 'GET,POST,PUT,DELETE',
// 	credentials: true,
//   };
  
//   app.use(cors([corsConfig4000, corsConfig3000]));
app.use((req, res, next) => {
	const allowedOrigins = ['http://localhost:3000','http://localhost:4000'];
	const origin = req.headers.origin;
  
	if (allowedOrigins.includes(origin)) {
	  res.header('Access-Control-Allow-Origin', origin);
	} else {
	}
  
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', true);

	return next();
  });
  
app.use(bodyParser.json({limit:"50mb"})); 
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://hoangdinhhung20012003:hust20210399@cluster1.ixp6j2h.mongodb.net/").then(()=>{

	console.log("thành công")}).catch(()=>{console.log("Thất bại")});

app.use("/logins",logins);
app.use("/auth",auth);
app.use("/books",books);
app.use('/loans',loans);
app.use('/api', purchasehistoryrouter);
app.use('/api', planRouter);
app.use("/addusers",addUsers);
app.use("/manageusers", manageUsers)
app.use("/userInfors",userInfors);
app.use('/api/has-active-plan', planRouter);
app.use("/addnotifications", addNotification);
app.use("/notifications", listNotification);
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});