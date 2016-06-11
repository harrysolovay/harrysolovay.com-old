module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src([
    	'app/images/*.{jpg,png}',
    	'app/images/*/*.{jpg,png}',
    	'app/images/*/*/*.{jpg,png}'
    ])
    
    .pipe(plugins.imagemin())
		
		.pipe(gulp.dest('dist/images'));
		
	}
}; 