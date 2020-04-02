import gulp from "gulp";
import clean from 'gulp-clean';

import constants from "../constants";

export default function cleanAssets() {
    return gulp.src([
        constants.paths.assets_dist
    ], {
        read: false,
        allowEmpty: true
    })
    .pipe(clean());
}
