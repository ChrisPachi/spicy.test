const gulp = require('gulp');

gulp.task('build', () => {

	const postcss = require('gulp-postcss');

	return gulp.src('./styles.css')
	.pipe(postcss([
		require('tailwindcss'),
		require('autoprefixer')
	]))
	.pipe(gulp.dest('./web/css/'));
	
});