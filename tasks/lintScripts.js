import gulp from "gulp";
import eslint from "gulp-eslint";

import constants from '../constants';

export default function lintScripts() {
    return gulp.src([
        `${constants.paths.scripts}/**/*.js`,
        `!${constants.paths.scripts}/vendor/**/*.js`
    ])
    .pipe(eslint())
    .pipe(eslint.format());
}
