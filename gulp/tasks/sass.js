module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('src/sass/main.sass')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                titile: "stile"
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
