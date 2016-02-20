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

gulp.task('build', ['less', 'templates']);
gulp.task('default', ['build', 'watch']);

gulp.task('watch', function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('js/**/*.handlebars', ['templates']);
    gulp.watch('gulpfile.js', process.exit);

    browserSync({
        server: {
            baseDir: '.'
        },
        browser: 'safari',
        injectChanges: false,
        files: ['./**/*.*'],
        notify: false
    });
});

gulp.task('less', function() {
    gulp.src('less/default.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
    gulp.src('less/index.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
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
        .pipe(gulp.dest('js/'));
});
