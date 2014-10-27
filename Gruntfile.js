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
        ignores : ['public/js/_analytics.js'],
        force : true
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
        'js/confidence.js',
        'js/require.js',
        'js/init.js',
        'js/getLocation.js',
        'js/main.js'
        ],
        dest: 'app.js'
      }
    },
    uglify: {
      my_target: {
        options: {
          sourceMap: true,
          sourceMapName: 'app.min.map'
        },
        files: {
          'app.js': ['js/*.js']
        }
      }
    },
    watch: {
      js: {
        files: [ 'js/*.js' ],
        tasks: [ 'jshint' , 'concat'/*, 'uglify' */],
        options: {
            livereload: true,
            nospawn: true
        }
      }
    }
  });

  [
    'grunt-contrib-uglify',
    'grunt-contrib-jshint',
    'grunt-contrib-concat',
    'grunt-contrib-watch'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  })

  grunt.registerTask('build', [ 'jshint' , 'concat']);
  grunt.registerTask('default', [ 'jshint' , 'concat' , 'watch' ]);
};