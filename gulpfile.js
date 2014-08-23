var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var rename = require('gulp-rename');


gulp.task('vulcanize', function () {
  gulp.src('app/index.html').
    pipe(rename('built.html')).
    pipe(gulp.dest('app'))
    .pipe(vulcanize({
      dest: 'app',
      csp: true,
      inline: true
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['vulcanize']);
gulp.task('watch', function () {
  gulp.watch('app/scripts/**/*', ['vulcanize'])
});
