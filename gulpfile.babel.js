import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('build:esm', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      babelrc: false,
      presets: [
        ['@babel/preset-env', { modules: false }]
      ]
    }))
    .pipe(gulp.dest('lib/esm'));
});
