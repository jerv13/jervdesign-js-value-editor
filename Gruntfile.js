module.exports = function (grunt) {

    var files = [
        'src/module.js',
        'src/config.js',
        'src/data-schema.js',
        'src/data-type.js',
        'src/filter-validate-result.js',
        'src/data-type-array.js',
        'src/data-type-boolean.js',
        'src/data-type-literal.js',
        'src/data-type-null.js',
        'src/data-type-number.js',
        'src/data-type-object.js',
        'src/data-type-string.js',
        'src/service.js',
        'src/standard-display.js',
        'src/field.js',
        'src/field-boolean.js',
        'src/field-literal.js',
        'src/field-number.js',
        'src/field-string.js'
        
    ];

    // Project configuration.
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                dist : {
                    options: {
                        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                        mangle: false,
                        sourceMap: true
                    },
                    files: {
                        'dist/<%= pkg.name %>.min.js': files
                    }
                }
            },
            concat: {
                options: {
                },
                dist: {
                    files: {
                        'dist/<%= pkg.name %>.js': files
                    }
                }
            },
            copy: {
                dist: {
                    files: [
                        {
                            expand: true,
                            cwd: 'src',
                            src: '*.html',
                            dest: 'dist'
                        }
                    ]
                }
            },
            watch: {
                scripts: {
                    files: ['src/**'],
                    tasks: ['uglify', 'concat', 'copy'],
                    options: {
                        spawn: false
                    }
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'copy']);
};
