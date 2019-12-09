// app.js

var session = require("express-session");

// config express-session
var sess = {
  secret: "bullpen",
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get("env") === "production") {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;

  // Uncomment the line below if your application is behind a proxy (like on Heroku)
  // or if you're encountering the error message:
  // "Unable to verify authorization request state"
  // app.set('trust proxy', 1);
}

app.use(session(sess));

// app.js

// Load environment variables from .env
var dotenv = require("dotenv");
dotenv.config();

// Load Passport
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || "http://localhost:3000/callback"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

// The following two lines might need to move to the end
app.use(passport.initialize());
app.use(passport.session());

// app.js

var userInViews = require("./lib/middleware/userInViews");
var authRouter = require("./routes/auth");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// ..
app.use(userInViews());
app.use("/", authRouter);
app.use("/", indexRouter);
app.use("/", usersRouter);
// ..
