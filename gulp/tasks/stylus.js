module.exports = function () {
    $.gulp.task('stylus', function () {
        return $.gulp.src('src/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({}))
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
            //.on('end', browserSync.reload);
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
