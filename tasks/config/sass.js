module.exports = function(grunt) {
	grunt.config.set('sass', {
		dev: {
			options: {
				loadPath: require('node-bourbon').includePaths	
			},
			
			files: [{
				expand: true,
				cwd: 'assets/styles/',
				src: ['*.scss'],
				dest: '.tmp/public/styles/',
				ext: '.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};