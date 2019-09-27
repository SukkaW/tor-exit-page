const gulp = require('gulp');
const yaml = require('js-yaml');
const fs = require('fs');
const ejs = require("gulp-ejs");
const log = require('fancy-log');
const rename = require('gulp-rename');
const htmlmin = require("gulp-htmlmin");
const htmlclean = require("gulp-htmlclean");

const minifyHTML = () => {
    return gulp.src('src/index.ejs')
        .pipe(ejs(yaml.safeLoad(fs.readFileSync('./src/config.yaml', 'utf8'))).on('error', log))
        .pipe(rename({ extname: '.html' }))
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            collapseWhitespace: true
        }))
        .pipe(htmlclean())
        .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.parallel(minifyHTML));

gulp.task('default', gulp.parallel('build'));
gulp.task('watch', () => {
    gulp.watch('src/**', gulp.series('build'));
});