'use strict';

global.$ = {
    gulp: require('gulp'),
    htmlbeautify: require('gulp-html-beautify'),
    plumber:      require('gulp-plumber'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    //$.gulp.parallel('pug', 'stylus'),
    //$.gulp.parallel('pug', 'sass'),
    $.gulp.parallel('pug', 'less'),
    $.gulp.parallel('watch', 'serve'),
    'watch',
    'serve'
));
