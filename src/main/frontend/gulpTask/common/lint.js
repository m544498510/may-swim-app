/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import gulp  from 'gulp';
import eslint from 'gulp-eslint';
const config = require(process.cwd() + '/config');

/***
 *  clean task
 */
gulp.task('lint',(callback)=>{
  const path = config.paths.src;
  return gulp.src([path+'**/*.js','!'+path+'**/*.spec.js'])
    .pipe(eslint({
      configFile: '.eslintrc'
    }))
    .pipe(eslint.format('node_modules/eslint-formatter-pretty'))
    .pipe(eslint.failAfterError());
});

