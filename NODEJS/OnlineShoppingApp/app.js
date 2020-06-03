var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var prodDetailsRouter = require('./routes/prodDetails');
var studentdetailsRouter = require("./routes/studentDetails");
var loginRouter = require("./routes/loginValidation");
var signupRouter = require("./routes/newUserSignup");
var addPRouter = require("./routes/addProduct");
var logoutRouter = require("./routes/logout");
var session = require("express-session");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*app.post('/fileupload', upload.single('streamfile'), function (req, res) {
    console.log('req.file', req.file);
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
}) */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({dest:'./public/'}).single('photo'));

app.use(session({
  secret: 'testing122455^#$',
  resave: false,
  saveUninitialized: true
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/product/details", prodDetailsRouter);
app.use("/user/logout", logoutRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, OPTIONS, DELETE");
    next();
});



app.use("/details/get/studentdata", studentdetailsRouter);

app.use("/user/signup", signupRouter);
app.use("/data/validation", loginRouter);
app.use("/add/data/product", addPRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(8081, function(){
	console.log("server is listing at 8081")
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
