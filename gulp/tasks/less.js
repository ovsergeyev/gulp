module.exports = function () {
    $.gulp.task('less', function () {
        return $.gulp.src('src/less/main.less')
            //.pipe($.gp.sourcemaps.init())
            .pipe($.gp.less({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                titile: "stile"
            }))
            //.pipe($.gp.csso())
            //.pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
