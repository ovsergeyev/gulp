module.exports = function () {
    $.gulp.task('pug', function () {
        var options = {
                "inline": [],
                "indent_size": 4,
                "indent_char": " ",
                "indent_with_tabs": false,
                "editorconfig": false,
                "eol": "\n",
                "end_with_newline": false,
                "indent_level": 0,
                "preserve_newlines": true,
                "max_preserve_newlines": 10,
                "space_in_paren": false,
                "space_in_empty_paren": false,
                "jslint_happy": false,
                "space_after_anon_function": false,
                "space_after_named_function": false,
                "brace_style": "collapse",
                "unindent_chained_methods": false,
                "break_chained_methods": false,
                "keep_array_indentation": false,
                "unescape_strings": false,
                "wrap_line_length": 0,
                "e4x": false,
                "comma_first": false,
                "operator_position": "before-newline",
                "indent_empty_lines": false,
                "templating": ["auto"]
            };
        
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.plumber({
                errorHandler: $.gp.notify.onError()
            }))
            .pipe($.gp.pug({
                //pretty: true
            }))
            .pipe($.gulp.dest('build'))
            .pipe($.htmlbeautify(options))
            .pipe($.gulp.dest('build'))
            .on('end', $.bs.reload);
    });
}
