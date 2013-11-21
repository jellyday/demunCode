module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		coffee:{
			compile:{
				files:{
					'site.js' : 'coffee/site.coffee'
				}
			}
		},
		less:{
			compile:{
				files:{
					'site.css' : 'less/site.less'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('default',['coffee','less']);
}