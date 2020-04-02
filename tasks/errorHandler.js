import gutil from "gulp-util";

export default function errorHandler (error) {
    const msg = error.codeFrame.replace(/\n/g, '\n    ');
    gutil.beep();
    gutil.log('|- ' + gutil.colors.bgRed.bold('Build Error in ' + error.plugin));
    gutil.log('|- ' + gutil.colors.bgRed.bold(error.message));
    gutil.log('|- ' + gutil.colors.bgRed('>>>'));
    gutil.log('|\n    ' + msg + '\n           |');
    gutil.log('|- ' + gutil.colors.bgRed('<<<'));
    this.emit('end');
}
