module.exports = function (grunt) {

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
                        'dist/<%= pkg.name %>.min.js': [
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
                            'src/standard-display.js'
                        ]
                    }
                }
            },
            concat: {
                options: {
                },
                dist: {
                    files: {
                        'dist/<%= pkg.name %>.js': [
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
                            'src/standard-display.js'
                        ]
                    }
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat']);
};
