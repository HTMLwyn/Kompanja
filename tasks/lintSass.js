import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';

import constants from '../constants';

export default function lintSass() {
    return gulp.src([
        `${constants.paths.styles}/**/*.scss`,
        `!${constants.paths.styles}/_develop.scss`,
        `!${constants.paths.styles}/vendor/**/*.scss`,
    ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
}
