module.exports = function () {
    $.gulp.task('img:dev', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif,svg}')
            .pipe($.gulp.dest('build/img'));
    });
    
    $.gulp.task('img:build', function () {
        return $.gulp.src('src/static/img/*.{png,jpg,gif,svg}')
            .pipe($.gp.tinypng('78ep5ryODgDLcqnPgRzlTMiMkPuHkVPW'))
            .pipe($.gulp.dest('build/img'));
    });
}