// Include gulp
var gulp = require('gulp');

// Include plugins
var autoprefixer = require('gulp-autoprefixer'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    debug = require('gulp-debug'),
    help = require('gulp-help'),
    imagemin = require('gulp-imagemin'),
    jshint = require('jshint'),
    stylish = require('jshint-stylish'),
    gulpJshint = require('gulp-jshint'),
    newer = require('gulp-newer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    util = require('gulp-util'),
    argv = require('yargs').argv,
    requireDir = require('require-dir'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    del = require('del'),
    _ = require('lodash');

// Uglify Options (from PNC project)
var prodUglifyOptions = { mangle: true, compress: true, output: { ascii_only: true }};
var devUglifyOptions = { mangle: false, compress: false, output: { beautify: true, ascii_only: true }};

// Paths
var paths = {
  src: './app',
  dest_prod_js: './dist/prod/HairEtcPittsburgh/js',
  dest_dev_js: './dist/dev',
  img: '/img',
  css: '/css'
};

gulp.task('default', function () {
  console.log("in DEFAULT");
});

gulp.task('setWatch', false, function () {
  console.log("In 'setWatch'")
  global.isWatching = true;
});

gulp.task('lint', 'Scans JS files for jshint errors', function () {
  var sourceFiles = paths.src + '/modules'
});

gulp.task('images', 'Copy and Minify app Images', function () {

});

gulp.task('watch', function () {
  
});