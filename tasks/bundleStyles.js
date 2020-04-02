import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cssmin from 'gulp-cssmin';
import gutil from 'gulp-util';

import constants from '../constants';

export default function bundleStyles() {
    return gulp.src(constants.vendorCss.concat([
        `${constants.paths.styles}/index.scss`
    ]))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(constants.fileNames.bundledStyles))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest(constants.paths.dist))
    .on('end', () => {
        gutil.log(`${gutil.colors.bgGreen.bold(' STYLES finished ')}`);
    });
}
