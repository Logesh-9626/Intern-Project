var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require('cors')
var dotenv =require('dotenv')
dotenv.config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/UsersPlan');
var RegisterRouter =require('./routes/Register')
var UsersPlanRouter =require('./routes/UsersPlan')
var LoginRouter =require('./routes/Login')
var GeminiApiRouter =require('./routes/GeminiApi')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/L', indexRouter);
app.use('/users', usersRouter);
app.use('/Register',RegisterRouter)
app.use('/UserPlan',UsersPlanRouter)
app.use('/Login',LoginRouter)
app.use('/AI',GeminiApiRouter)

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
  res.status('connected')
});

module.exports = app;
