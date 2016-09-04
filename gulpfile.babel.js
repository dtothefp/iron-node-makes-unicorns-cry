import gulp from 'gulp';

gulp.task('default', (cb) => {
  console.log('*****FIRST******');
  debugger;
  console.log('*****SECOND******');
  debugger;
  console.log('*****AFTER******');
  cb();
});
