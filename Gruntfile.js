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

            //
            options: {
                // 此处定义的banner注释将插入到输出文件的顶部
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        qunit: {
            files: ['test/**/*.html']
        },

        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],

            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },

        // 任意数据。
        my_property: 'whatever',
        my_src_files: ['foo/*.js', 'bar/*.js']

    });


    // Load the plugin that provides the "uglify,jshint,qunit,watch,concat" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    // 在命令行上输入"grunt test"，test task就会被执行。
    grunt.registerTask('test', ['jshint', 'qunit']);

    // 只需在命令行上输入"grunt"，就会执行default task
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'jshint', 'concat', 'uglify']);
    grunt.registerTask('dist', ['replace', 'build', 'copy']);

    //grunt.loadTasks('tasks');

};
