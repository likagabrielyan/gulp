var gulp = require('gulp'),
	concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('assets/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('assets/js/'));
});