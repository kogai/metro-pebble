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
          captureFile: 'test/results.txt', 
          quiet: false 
        },
        src: ['test/*.js']
      }
    },
    exec : {
        build : {
            command : 'pebble build'
        },
        install : {
            command : 'pebble install --phone 192.168.10.4'
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
    'grunt-exec',
    'grunt-contrib-jshint',
    'grunt-contrib-concat',
    'grunt-contrib-watch',
    'grunt-mocha-test'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  })

  grunt.registerTask('test', [ 'mochaTest' ]);
  grunt.registerTask('build', [ 'jshint' , 'concat' , 'exec']);
  grunt.registerTask('default', [ 'jshint' , 'concat' , 'watch' ]);
};
