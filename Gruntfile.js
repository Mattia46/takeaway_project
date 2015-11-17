module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'app/models/**/*.js', 'spec/**/*.js']
      },

      jasmine: {
        src: 'app/models/**/*.js',
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js',
        display: 'full',
        summary: true
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jshint', 'jasmine']);

  };
