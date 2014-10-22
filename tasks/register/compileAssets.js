module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'sass:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};