var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');

// router setup
var index = require('./routes/index');

var app = express();

// view engine setup
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render(err.status == 404 ? '404' : 'error');
});

module.exports = app;
