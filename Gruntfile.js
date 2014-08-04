module.exports = function (grunt) {

  grunt.initConfig({
    //concat: {
    //  lib: {
    //    src: [
    //    ],
    //    dest: 'Scripts/lib.js'
    //  }
    //},
    bower_concat: {
      all: {
        dest: 'Scripts/lib.js'
      }
    },
    uglify: {
      bower: {
        files: {
          'Scripts/lib.min.js': 'Scripts/lib.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.registerTask('default', [/*'concat',*/ 'bower_concat', 'uglify']);
};
