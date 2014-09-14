module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 这里是concat任务的配置信息。
            options: {
              // 这里是任务级的Options，覆盖默认值
            },
            foo: {
              // concat task "foo" target options and files go here.
            },
            bar: {
              // concat task "bar" target options and files go here.
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
