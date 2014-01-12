# [grunt-recess](https://npmjs.org/package/grunt-recess)

이 모듈은 less 파일을 사용하기 위한 모듈이기도 하지만 트위터에서 개발한 도구 입니다다.


설치는 

```
npm install grunt-recess --save-dev
```


기본적인 사용법은 [RECESS](https://github.com/twitter/recess) 를 참고하기 바란다.

여기서는 약간의 수정이 있었다.
`Gruntfile` 의 코드는 아래와 같다.

```
module.exports = function(grunt) {

  // 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/**\n' +
              '* <%= pkg.name %>.js v<%= pkg.version %> by @fat and @mdo\n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              '*/\n',

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
    recess: {
      options: {
        compile: true,
        banner: '<%= banner %>'
      },
      build: {
        src: ['src/less/*.less'],
        dest: 'build/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['src/less/*.less'],
        dest: 'build/css/<%= pkg.name %>.min.css'
      }
    }
  });

  // "uglify" task를 지원하는 플러그인 로드.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // less 를 지원하는 모듈
  grunt.loadNpmTasks('grunt-recess');


  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'dist-css']);

};
```



`package.json` 의 코드는 아래와 같다.

```
{
  "name": "grunt1",
  "version": "0.0.0",
  "description": "demun grunt test",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "demun"
  ],
  "author": "demun",
  "license": "BSD-2-Clause",
  "devDependencies": {
    "grunt": "~0.4.2",
    "grunt-contrib-uglify": "~0.2.7",
    "grunt-recess": "~0.5.0"
  }
}

```