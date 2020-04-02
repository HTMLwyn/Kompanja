import gulp from "gulp";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import gutil from "gulp-util";

import constants from '../constants';

export default function bundleScripts() {
    return gulp.src(constants.vendorJs.concat([
        `${constants.paths.dist}/${constants.fileNames.bundledScripts}`
    ]))
    .pipe(uglify())
    .pipe(concat(constants.fileNames.bundledScripts))
    .pipe(gulp.dest(constants.paths.dist))
    .on('end', () => {
        gutil.log(`${gutil.colors.bgBlue.bold(' SCRIPTS finished ')}`);
    });
}
