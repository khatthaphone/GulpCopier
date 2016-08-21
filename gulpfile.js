var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('*.{jpg, jpeg}', ['default']);
});

gulp.task('default', function() {
  gulp.src('*.{jpg, jpeg}')
  .pipe(gulp.dest('\\ACER\Users\Public\Pictures'));
});
