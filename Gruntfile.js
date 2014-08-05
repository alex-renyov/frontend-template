module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      app: {
        src: [
          'app/scripts/app.js'
        ],
        dest: 'Scripts/app.js'
      }
    },
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
      },
      app: {
        files: {
          'Scripts/app.min.js': '<%= concat.app.dest %>'
        }
      },
      underscore_templates: {
        files: {
          'Scripts/templates_underscore.min.js': 'Scripts/templates_underscore.js'
        }
      }
    },
    jst: {
      compile: {
        options: {
          namespace: 'App.Templates',
          templateSettings: {},
          prettify: true,
          processName: function(name) {
            return name.replace(/app\/templates\/underscore\//, '')
              .replace(/\.html/, '');
          }
        },
        files: {
          'Scripts/templates_underscore.js': ['app/templates/underscore/*.html']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-jst');

  grunt.registerTask('default', ['concat', 'bower_concat', 'jst', 'uglify']);
};