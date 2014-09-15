module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // refer to the values of properties
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 这里是concat任务的配置信息。
            options: {
                // 这里是任务级的Options，覆盖默认值

                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                // the files to concatenate
                src: ['src/**/*.js'],

                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            },
            foo: {
                // concat task "foo" target options and files go here.
                files: [
                    {
                        src: ['src/aa.js', 'src/aaa.js'],
                        dest: 'dest/a.js'
                    },
                    {
                        src: ['src/aa1.js', 'src/aaa1.js'],
                        dest: 'dest/a1.js'
                    },
                ],
            },
            bar: {
                // concat task "bar" target options and files go here.
                files: [
                    {
                        src: ['src/bb.js', 'src/bbb.js'],
                        dest: 'dest/b/',
                        nonull: true
                    },
                    {
                        src: ['src/bb1.js', 'src/bbb1.js'],
                        dest: 'dest/b1/',
                        filter: 'isFile'
                    },
                ],
            },
        },

        uglify: {
            // 这里是uglify任务的配置信息
            bar: {
              // uglify task "bar" target options and files go here.
            },
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // 任意数据。
    my_property: 'whatever',
    my_src_files: ['foo/*.js', 'bar/*.js'],

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
