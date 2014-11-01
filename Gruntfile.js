module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        },
        force : true
      }
    },
    concat: {
      dist: {
        src: [
        'js/confidence.js',
        'js/require.js',
        'js/init.js',
        'js/getLocation.js',
        'js/main.js'
        ],
        dest: 'src/js/app.js'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'test/results.txt', // Optionally capture the reporter output to a file
          quiet: false // Optionally suppress output to standard out (defaults to false)
        },
        src: ['test/*.js']
      }
    },
    watch: {
      js: {
        files: [ 'js/*.js' ],
        tasks: [ 'mochaTest' , 'jshint' , 'concat'/*, 'uglify' */],
        options: {
            livereload: true,
            nospawn: true
        }
      }
    }
  });

  [
    'grunt-contrib-jshint',
    'grunt-contrib-concat',
    'grunt-contrib-watch',
    'grunt-mocha-test'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  })

  grunt.registerTask('test', [ 'mochaTest' ]);
  grunt.registerTask('build', [ 'mochaTest' , 'jshint' , 'concat']);
  grunt.registerTask('default', [ 'jshint' , 'concat' , 'watch' ]);
};
