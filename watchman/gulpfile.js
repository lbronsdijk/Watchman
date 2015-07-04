/**
 * Gulpfile.js
 *
 * Gulp is a javascript side task runner. 
 * This file contains all tasks, e.g. compiling and minifying sass and javascript resources.
 *
 * @package Watchman
 * @author Luc Bronsdijk <info@lucbronsdijk.nl>
 */

// Require gulp dependecies
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var csso    = require('gulp-csso');
var uglify  = require('gulp-uglify');

// Javascript resources
var jsResources = [
        'public/vendor/angular.js',
        'public/vendor/*.js',
        'public/app.js',
        'public/controllers/*.js',
        'public/services/*.js',
        'public/filters/*.js',
        'public/directives/*.js'
    ];

// Compile Sass
gulp.task('sass', function() {
    gulp.src('public/css/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('public/css'));
});

// Compile javascript
gulp.task('javascript', function() {
  gulp.src(jsResources)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

// The watcher...
gulp.task('watch', function() {
    gulp.watch('public/css/*.scss', ['sass']);
    gulp.watch(['public/**/*.js', '!public/app.min.js', '!public/vendor'], ['javascript']);
});

// Default task
gulp.task('default', ['sass', 'javascript', 'watch']);
