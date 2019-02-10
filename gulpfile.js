// Gulp Variables
var gulp = require('gulp');
	watch = require('gulp-watch');
	connect = require('gulp-connect');
	stylus = require('gulp-stylus');
	nib = require('nib');


// Stylus Paths
var paths = {
	stylusSVG: [
		'source/stylus/svg/**/*.styl',
		'source/stylus/svg.styl'
	],
	stylusSVGS: [
		'source/stylus/svg-simple.styl'
	],
	stylusCSS: [
		'source/stylus/css.styl'
	],
	stylusTut: [
		'source/stylus/tutorial.styl'
	],
	htmlFiles: [
		'build/css/index.html',
		'build/svg/index.html',
		'build/css/tutorial.html'
	]
}


// Stylus for SVG
gulp.task('stylusSVG', function() {
	gulp.src(paths.stylusSVG)
		.pipe(stylus({
			use: nib()
		}))
		.pipe(gulp.dest('./build/svg/assets/styles'))
		.pipe(connect.reload());
});


// Stylus for Tutorial
gulp.task('stylusTut', function() {
	gulp.src(paths.stylusTut)
		.pipe(stylus({
			use: nib(),
			compress: true
		}))
		.pipe(gulp.dest('./build/common/styles'))
		.pipe(connect.reload());
});

// Stylus for simple SVG
gulp.task('stylusSVGS', function() {
	gulp.src(paths.stylusSVGS)
		.pipe(stylus({
			use: nib(),
			compress: true
		}))
		.pipe(gulp.dest('./build/svg-simple/assets/styles'))
		.pipe(connect.reload());
});

// Stylus for CSS
gulp.task('stylusCSS', function() {
	gulp.src(paths.stylusCSS)
		.pipe(stylus({
			use: nib(),
			compress: false
		}))
		.pipe(gulp.dest('./build/css/assets/styles'))
		.pipe(connect.reload());
});

// Watch HTML files.
gulp.task('htmlWatch', function() {
	gulp.src(paths.htmlFiles)
		.pipe(connect.reload());
});

// WebServer
gulp.task('webserver', function() {
	connect.server({
		root: 'build/',
		livereload: true
	});
});

gulp.task('stylus', ['stylusCSS', 'stylusSVG', 'stylusSVGS', 'stylusTut']);

// Watcher
gulp.task('watch', function() {
	gulp.watch('source/stylus/**/*.styl', ['stylus']);
	gulp.watch('build/**/*.html', ['htmlWatch']);
});


// Final Tasker call using gulp in terminal
gulp.task('default', ['stylus', 'webserver', 'watch']);