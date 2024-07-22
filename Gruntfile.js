module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			scripts: {
				files: 'app/**/*.js',
				tasks: ['browserify'],
				options: {
					interrupt: true
				}
			},
			templates: {
				files: 'app/**/*.hbs',
				tasks: ['handlebars'],
				options: {
					interrupt: true
				}
			},
		},
		
		handlebars: {
			compile: {
				options: {
					namespace: false,
					commonjs: true,
					processName: function (filename) {
						return filename.replace('app/templates/','').replace('.hbs','');
					}
				},
				src: 'app/templates/**/*.hbs',
				dest: 'app/templates/compiledTemplates.js'
			}
		},

		browserify: {
			options: {
				debug: true,
				aliasMappings: [
					{
						cwd: 'app/',
						src: ['**/*.js'],
						dest: 'app/'
					}
				]
			},
			app: {
				src: [ 'app/**/*.js' ],
				dest: 'static/js/bundle.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('runFrontend', function () {
		grunt.util.spawn({
			cwd: 'node',
			args: ['./node_modules/.bin/nodemon', 'server.js'],
			opts: {
				stdio: 'inherit'
			}
		});
	});
	
	grunt.registerTask('runAPI', function () {
		grunt.util.spawn({
			cmd: 'node',
			args: ['./node_modules/.bin/nodemon', 'api.js'],
			opts: {
				stdio: 'inherit'
			}
		});
	});


	grunt.registerTask('compile', ['handlebars', 'browserify']);

	grunt.registerTask('server', ['compile', 'runFrontend', 'runAPI', 'watch']);

	grunt.registerTask('default', ['compile']);

};
