module.exports = function(grunt) {

  grunt.initConfig({
    markserv: require('./Markconf.js')
  });

  grunt.loadNpmTasks('grunt-markserv');

  grunt.registerTask('default', ['markserv']);
};