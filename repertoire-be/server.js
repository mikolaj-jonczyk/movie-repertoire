const express = require("express");
const cors = require("cors");
const cinemaDb = require("./db/cinema/cinema");
const movieDb = require("./db/movie/movie");
const repertoireDb = require("./db/repertoire/repertoire");
const initializePassport = require("./passport-config");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const app = express();

const users = [{ id: '1', name: 'admin', password: 'admin' }]

initializePassport(passport,
   name => users.find(user => user.name === name),
   id => users.find(user => user.id === id)
);

app.use(flash())

app.use(session({
  secret: "SECRET",
  resave: false,
  saveUninitialized: false
})) 

app.use(express.static('public'))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.set('view-engine', 'ejs');

//Routes


app.get("/login",checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/admin',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get("/admin", checkAuthenticated, (req, res) => {
  res.render('admin.ejs');
});

app.get("/addCinema", checkAuthenticated, (req, res) => {
  res.render('addCinema.ejs');
});

app.get("/addMovie", checkAuthenticated, (req, res) => {
  res.render('addMovie.ejs');
});

app.get("/addRepertoire", checkAuthenticated, (req, res) => {
  res.render('addRepertoire.ejs');
});


app.get("/cinemas", async (req, res) => {
  res.status(200).json(await cinemaDb.getAllCinemas());
});

app.get("/cinema/:id", async (req, res) => {
  res.status(200).json(await cinemaDb.getCinemaById(req.params.id));
});

app.get("/cinema/name/:name", async (req, res) => {
  res.status(200).json(await cinemaDb.getCinemaByName(req.params.name));
});

app.post("/addCinema", (req, res) => {
  cinemaDb.createCinema(req.body);
  res.status(201).send('Cinema created');  
});

app.get("/movies", async (req, res) => {
  res.status(200).json(await movieDb.getAllMovies());
});

app.get("/movie/:id", async (req, res) => {
  res.status(200).json(await movieDb.getMovieById(req.params.id));
});

app.get("/movie/name/:name", async (req, res) => {
  res.status(200).json(await movieDb.getMovieByName(req.params.name));
});

app.post("/addMovie", (req, res) => {
  movieDb.createMovie(req.body);
  res.status(201).send('Movie created');  
});

app.get("/repertoire/movie/:id", async (req, res) => {
  res.status(200).json(await repertoireDb.getRepertoireByMovieId(req.params.id));
});

app.get("/repertoire/cinema/:id", async (req, res) => {
  res.status(200).json(await repertoireDb.getRepertoireByCinemaId(req.params.id));
});

app.post("/addRepertoire", (req, res) => {
  repertoireDb.createRepertoire(req.body);
  res.status(201).send('Repertoire created');  
});

app.post('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
})

app.all('*', function(req, res) {
  res.status(404).send('<h1>404! Page not found</h1>');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/admin');
  }
  next()
}

app.listen(3000, () => console.log("server is runnng on port 3000"));
