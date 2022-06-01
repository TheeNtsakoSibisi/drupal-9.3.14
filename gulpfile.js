var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));

gulp.task('themecss', () => {
    return gulp.src('**/*.scss')
        .pipe(
            sass({
                outputStyle: 'compressed',
                includePaths: ['./node_modules']
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
    gulp.watch('./themes/custom/suresound/assets/**/*.scss', (done) => {
        gulp.series(['themecss'])(done);
    });
});


