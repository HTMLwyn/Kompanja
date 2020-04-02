import gulp from "gulp";
import gutil from "gulp-util";

import constants from "../constants";

export default function copyAssets() {
    return gulp.src([
        `${constants.paths.assets_src}/**/*`
    ])
    .pipe(gulp.dest(constants.paths.assets_dist))
    .on('end', () => {
        gutil.log(`${gutil.colors.bgYellow.bold(' ASSETS finished ')}`);
    });
}
