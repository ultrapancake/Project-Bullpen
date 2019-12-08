var session = require('express-session');

// config express-session
var sess = {
  secret: 'Bullpen',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;

  // Uncomment the line below if your application is behind a proxy (like on Heroku)
  // or if you're encountering the error message:
  // "Unable to verify authorization request state"
  // app.set('trust proxy', 1);
}

// app.use(session(sess));

var dotenv = require('dotenv');
dotenv.config();

// Load Passport
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
var strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

var userInViews = require('./lib/middleware/userInViews');
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var projectArr = [];
$.ajax({
  url: "/api/index",
  type: "GET",
  crossDomain: true,
  headers: {
    Authorization: "Basic " + btoa("_system:SYS"),
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  }
}).then(function(response) {
  response.forEach(function(res) {
    res[3] = new Date(res[3]);
    res[4] = new Date(res[4]);
  });
  projectArr = response;
});

google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task ID");
  data.addColumn("string", "Task Name");
  data.addColumn("string", "Resource");
  data.addColumn("date", "Start Date");
  data.addColumn("date", "End Date");
  data.addColumn("number", "Duration");
  data.addColumn("number", "Percent Complete");
  data.addColumn("string", "Dependencies");

  data.addRows(projectArr);

  var options = {
    height: 400,

    backgroundColor: {
      fill: "#ECEFF1"
    },
    gantt: {
      trackHeight: 30,
      percentEnabled: false,
      criticalPathEnabled: false
    }
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("chart-div")
  );

  chart.draw(data, options);
}

/* Roll Over Effects for Icons on Buttons*/

$(function() {
  $("#add-employee").hover(
    function() {
      $("#add-player-icon").addClass("add-player-icon-white");
    },
    function() {
      $("#add-player-icon").removeClass("add-player-icon-white");
    }
  );
});

$(function() {
  $("#view-employee").hover(
    function() {
      $("#view-players-icon").addClass("view-players-icon-white");
    },
    function() {
      $("#view-players-icon").removeClass("view-players-icon-white");
    }
  );
});

$(function() {
  $("#add-project").hover(
    function() {
      $("#add-event-icon").addClass("add-event-icon-white");
    },
    function() {
      $("#add-event-icon").removeClass("add-event-icon-white");
    }
  );
});

$(function() {
  $("#view-project").hover(
    function() {
      $("#view-events-icon").addClass("view-events-icon-white");
    },
    function() {
      $("#view-events-icon").removeClass("view-events-icon-white");
    }
  );
});

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);

app.use(passport.initialize());
app.use(passport.session());