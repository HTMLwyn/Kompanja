import gulp from 'gulp';

// Import tasks
import lintSass from './tasks/lintSass';
import copyAssets from './tasks/copyAssets';
import cleanAssets from "./tasks/cleanAssets";
import lintScripts from './tasks/lintScripts';
import bundleStyles from './tasks/bundleStyles';
import bundleScripts from './tasks/bundleScripts';
import babelCompiler from './tasks/babelCompiler';

// Import constants
import constants from './constants';

// Define tasks
const handleAssets = gulp.series(cleanAssets, copyAssets);
const compileStyles = gulp.series(lintSass, bundleStyles);
const compileScripts = gulp.series(lintScripts, babelCompiler, bundleScripts);
gulp.task('assets', handleAssets);
gulp.task('styles', compileStyles);
gulp.task('scripts', compileScripts);
gulp.task('build', gulp.parallel(['assets', 'styles', 'scripts']));

// Watch task
function watch() {
    gulp.watch(`${constants.paths.assets_src}/**/*`, gulp.parallel('assets'));
    gulp.watch(`${constants.paths.styles}/**/*.{sass,scss,css}`, gulp.parallel('styles'));
    gulp.watch(`${constants.paths.scripts}/**/*.js`, gulp.parallel('scripts'));
}

// Export a default task
export default watch;
