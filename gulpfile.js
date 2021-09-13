const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const htmlClean = require('gulp-htmlclean');
const imageMin = require('gulp-imagemin');
const del = require('del');

function minifyJS() {
  return gulp
    .src('lib/**/*.js')
    .pipe(
      uglify({
        output: {
          comments: false,
        },
      }),
    )
    .pipe(gulp.dest('./lib'));
}

function minifyCSS() {
  return gulp
    .src('lib/**/*.wxss')
    .pipe(cssnano())
    .pipe(gulp.dest('./lib'));
}

function minifyHTML() {
  return gulp
    .src('lib/**/*.wxml')
    .pipe(htmlClean())
    .pipe(gulp.dest('./lib'));
}

function copyOther() {
  return gulp.src(['lib/**/*.map', 'lib/**/*.json', 'lib/**/*.wxs']).pipe(gulp.dest('./lib'));
}

function cleanBuild() {
  return del(['lib/**/*']);
}

function cleanlib() {
  return del(['lib/**/*']);
}

function carry() {
  return gulp.src('lib/**/*').pipe(gulp.dest('lib'));
}

gulp.task('build', gulp.series(gulp.parallel(minifyJS, minifyCSS, minifyHTML, copyOther)));

gulp.task('default', gulp.series('build'));
