module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {

            dist: {
                files: {
                    'css/main.css': 'SASS/main.sass'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        watch: {
            scripts: {
                files: ['SASS/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        }


    });
    // Load the plugins tasks 
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).

    grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
};