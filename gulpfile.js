var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var handlebars = require('gulp-handlebars');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var path = require('path');
var ftp = require('vinyl-ftp');

gulp.task('default', ['build', 'watch']);

gulp.task('build', [
    'less',
    'templates',
    'build-html',
    'build-resume',
    'build-img',
    'build-js',
    'build-libs'
]);

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('js/**/*.handlebars', ['templates']);
    gulp.watch('*.html', ['build-html']);
    gulp.watch('resume.pdf', ['build-resume']);
    gulp.watch('img/**/*', ['build-img']);
    gulp.watch('libs/**/*', ['build-libs']);
    gulp.watch('gulpfile.js', process.exit);

    browserSync({
        server: {
            baseDir: 'build'
        },
        browser: 'safari',
        injectChanges: false,
        files: ['build/**/*.*'],
        notify: false
    });
});

gulp.task('less', function() {
    gulp.src(['less/default.less', 'less/index.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

gulp.task('templates', function() {
    var partials = gulp.src('js/partials/*.handlebars')
        .pipe(handlebars({
          handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>))', {}, {
            imports: {
                processPartialName: function(fileName) {
                    // Strip the extension
                    // Escape the output with JSON.stringify
                    return JSON.stringify(path.basename(fileName, '.js'));
                }
            }
        }));

    var templates = gulp.src('js/templates/*.handlebars')
        .pipe(handlebars({
            handlebars: require('handlebars')
        }))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'Handlebars.templates',
            noRedeclare: true, // Avoid duplicate declarations
        }));

    // Output both the partials and the templates as build/js/templates.js
    return merge(partials, templates)
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('build-html', function() {
    gulp.src('*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('build-resume', function() {
    gulp.src('resume.pdf')
        .pipe(gulp.dest('build'));
});

gulp.task('build-img', function() {
    gulp.src('img/**/*')
        .pipe(gulp.dest('build/img'));
});

gulp.task('build-js', function() {
    gulp.src('js/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('build-libs', function() {
    gulp.src('libs/**/*')
        .pipe(gulp.dest('build/libs'));
});

gulp.task('upload', function() {
    const config = require('./ftpconfig.json');

    var conn = ftp.create({
        host: config.host,
        user: config.user,
        password: config.password,
    });

    return gulp.src('build/**/*', {
            buffer: false
        })
        .pipe(conn.newer('/'))
        .pipe(conn.dest('/'));
});
