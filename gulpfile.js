var gulp = require('gulp');

/*
 -- TOP LEVEL FUNCTIONS

   gulp.task - Define task
   gulp.src - Point to files to use
   gulp.dest - points to folder to output
   gulp.watch - Watch files & folders for changes
 */

 gulp.task('message',function(){
   return console.log('gulp is running');
 });

 gulp.task('copyHtml',function(){
   gulp.src('src/*.html')
     .pipe(gulp.dest('dist'))
 });

 gulp.task('default',function(){
   console.log('gulp is running...');
 });
