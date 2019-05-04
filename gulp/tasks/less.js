module.exports = function () {
    $.gulp.task('less', function () {
        return $.gulp.src('src/less/main.less')
            .pipe($.plumber({
                    errorHandler: $.gp.notify.onError()
            }))
            //.pipe($.gp.sourcemaps.init())
            .pipe($.gp.less({}))
            .pipe($.gp.autoprefixer({
                browsers: ['last 1 versions'],
                cascade: false
            }))
            //.on("error", $.gp.notify.onError({
            //    title: "stile"
            //}))
            //.pipe($.gp.csso())
            //.pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/css/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}
