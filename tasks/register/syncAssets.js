module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'sass:dev',
		'jst:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
