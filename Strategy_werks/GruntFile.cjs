module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      dist: {
        files: {
          'dist/js/main.min.js': ['src/js/*.js']
        }
      }
    },
    
    cssmin: {
      dist: {
        files: {
          'dist/css/main.min.css': ['src/css/*.css']
        }
      }
    },
    
    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugins that provide the "uglify", "cssmin", and "watch" tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);
};
