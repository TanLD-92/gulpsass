var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var browserSync = require("browser-sync").create();

gulp.task('sass-compile', function () {
    gulp.src(['./Styles/scss/**/*.scss', './Styles/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./Content/'))
        .pipe(livereload({ start: true }));
});

gulp.task('watch-sass', function () {
    gulp.watch(['./Styles/scss/**/*.scss', './Styles/scss/*.scss'], ['sass-compile']);
    livereload.listen();
});
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "http://localhost:59612/"
    });
});
gulp.task('default', ['sass-compile', 'watch-sass', 'browser-sync']);
