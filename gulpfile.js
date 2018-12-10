var gulp = require("gulp");
var babel = require("gulp-babel");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
gulp.task('task1',function(){
	console.log("hello world");
});
gulp.task('data',function(){
	gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'));
	
});
gulp.task('imges',function(){
	gulp.src('img/**')
	.pipe(gulp.dest('dist/img'))
});
gulp.task('copy-html',function(){
	gulp.src('*.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload())
});

gulp.task('sass',function(){
	gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
	
});
gulp.task('sever',function(){
	connect.server({root:'dist',livereload:true});
	
});
gulp.task('watch',function(){
	gulp.watch('*.html',['copy-html']);
	gulp.watch('img/**/*.{jpg,png}',['imges']);
	gulp.watch(['data']);
});
gulp.task('default',['sever','watch']);

