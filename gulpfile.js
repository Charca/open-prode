var gulp = require('gulp');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
  gulp.src('src/prode/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', ['build'], function() {
  browserSync.init(['dist/**'], {
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('copy', function() {
  gulp.src('src/prode/index.html')
    .pipe(gulp.dest('dist'));

  gulp.src('src/prode/json/**/*')
    .pipe(gulp.dest('dist/json'));
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('src/**/*.*', ['build']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['browserify', 'copy']);

