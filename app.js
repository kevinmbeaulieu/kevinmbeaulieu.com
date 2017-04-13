let bodyParser = require('body-parser');
let express = require('express');
let expHbs  = require('express-handlebars');
let expLess = require('express-less');
let favicon = require('serve-favicon');
let logger = require('morgan');
let path = require('path');

// router setup
let index = require('./routes/index');

let app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', expLess(__dirname + '/less', {
    compress: true,
    debug: app.get('env') == 'development'
}));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err.stack);

    // render the error page
    res.status(err.status || 500);
    res.render(err.status == 404 ? '404' : 'error');
});

module.exports = app;
