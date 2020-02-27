module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    'js/minified.js': []
                }
            }
        },
       less: {
          development: {
             options: {
                compress: true,
                yuicompress: true,
                optimization: 2
             },
             files: {
                "css/style.css": "less/style.less"
             }
         }
    },
    watch: {
      styles: {
         files: ['less/**/*.less'],
         tasks: ['less'],
         options: {
            nospawn: true,
         }
      }
   },
    
 });
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.registerTask('default', ['watch']);
 };