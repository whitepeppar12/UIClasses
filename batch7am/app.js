var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var http = require("http");

var loginValidationRouter = require("./routes/loginValidation");
var studentDetailsRouter = require("./routes/studentDetails");
var productDetailsRouter = require("./routes/productDetails");
var newSignupRouter = require("./routes/newSignup");

var app = express();

var noOfUsers = 0;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login/validation', loginValidationRouter);
app.use('/get/studentDetails', studentDetailsRouter);
app.use('/show/prodDetails', productDetailsRouter);
app.use('/user/signup', newSignupRouter);

var server = http.createServer(app);
var io = require('socket.io')(server);
io.on("connection", function(socket){
	console.log("one user got connected");
	noOfUsers++;
	console.log("total numbers of user connected are " + noOfUsers);

	socket.on("userMsgSend", function(data){
		console.log("received " + data );

		socket.broadcast.emit("UserMSg", data);
	})
});

server.listen(8080, function(){
	console.log("Server is listing at 8080");
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
