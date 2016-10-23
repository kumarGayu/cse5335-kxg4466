var gulp = require('gulp'),
    del = require('del'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    source = require( 'vinyl-source-stream');

/** JavaScript compilation */
gulp.task('js', function() {
  return browserify('./app/App.js')
  .transform(reactify)
  .bundle()
  .pipe(source('./app/App.js'))
  .pipe(gulp.dest('./public/'));
})

.task('server', function() {
    browserSync({
        server: {
            baseDir: './' 
        }
    });
})


/*
* Clean the build folder
*/
.task('clean', function(cb) {
    del(['public/app/**'], cb);
})

/*
* serve task will be called
*/
.task('serve', ['clean', 'js', 'server'], function() {
    return gulp.watch(['app/*.js', 'app/**/*.js'], [ 'js', browserSync.reload]);
})