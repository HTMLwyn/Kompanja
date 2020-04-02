import gulp from "gulp";
import plumber from "gulp-plumber";
import babel from "gulp-babel";
import concat from "gulp-concat";

import errorHandler from './errorHandler';

import constants from '../constants';

export default function babelCompiler() {
    return gulp.src([
        `${constants.paths.scripts}/modules/*.js`,
        `${constants.paths.scripts}/index.js`
    ])
    .pipe(plumber({
        errorHandler: errorHandler
    }))
    .pipe(babel())
    .pipe(concat(constants.fileNames.bundledScripts))
    .pipe(gulp.dest(constants.paths.dist));
}
