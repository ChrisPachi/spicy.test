'use strict';

/**
 * Gulp file for SpicyWeb test project
 * chris.coinbox@gmail.com
 * Nothing too fancy, uses taliwindcss as a postcss plugin to purge unused utility classes
 * and browsersync for convenience - also bundles up jquery stuff and any custom js
 **/
 
const { watch } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');
const browserSync = require('browser-sync').create();

function css(cb) {
	const gulp = require('gulp');
	const postcss = require('gulp-postcss');

	// this is not purging? tailwind handles it? double check this

	return gulp.src(
		'./styles.css'
	).pipe(postcss([
		require('tailwindcss'),
		require('autoprefixer')
	]))
	.pipe(gulp.dest('./web/css/'))
	.pipe(browserSync.stream());

	cb();
}

function scripts(cb) {
	const gulp = require('gulp');
	
	return gulp.src([
		'./node_modules/jquery/jquery.js', 
		'./node_modules/slick-carousel/slick/slick.js',
		'./scripts.js'
	])
	.pipe(concat('scripts.js'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('./web/js/'))
	.pipe(browserSync.stream());

	cb();
}

exports.default = function() {

	browserSync.init({
	    proxy: "spicy.test"
	});

	watch(['./templates/**/*.html', './styles.css', './tailwind.config.js'], css).on('change', browserSync.reload);
	watch(['./scripts.js'], scripts).on('change', browserSync.reload);
};