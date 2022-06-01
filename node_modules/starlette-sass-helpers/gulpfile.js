var gulp = require('gulp'),
    concat = require('gulp-concat'),
	sass = require('gulp-sass')(require('sass'));;

gulp.task('lilium-css', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('lilium.min.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', (done) => {
        gulp.series(['lilium-css'])(done);
    });
});

gulp.task('build', done => {
    gulp.series(['lilium-css'])(done);
});