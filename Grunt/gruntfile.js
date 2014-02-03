module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: { // concat 는 파일을 합친다.
      options: {
        // 합친 결과 파일에서 각 파일을 구분할 문자열을 정의한다.
        separator: ';'
      },
      dist: {
         // 합칠 파일들.
        src: ['src/**/*.js'],
         // 결과 js 파일의 위치
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    uglify: { // 공백을 제거하고 변수명을 짧은 이름으로 바꾸는 작업
      options: {
        // 결과 파일 상단에 주석을 넣는다.
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          // minify한 자바스크립트 파일을 dist/에 생성한다.
          // concat task에서 생성한 파일을 사용해서 minify를 진행하기 위해서 <%= concat.dis.dest %>를 사용
          'dist/js/min/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // qunit: { //  HTML 실행 파일이 있는 위치만 지정하면 된다
    //   files: ['src/**/*.html']
    // },
    jshint: {
      // 검사를 실행할 파일을 지정한다.
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        // 바꾸고 싶은 JSHint 기본값을 여기 지정한다.
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: { // 설정한 파일에 어떤 변화가 감지될 때, 지정한 task들을 순서대로 실행한다
      // grung watch 를 실행하면 감지한다.
      // files: ['<%= jshint.files %>'],
      // tasks: ['jshint', 'qunit'] 
      js:{
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: { // js에 livereload 추가설정
          livereload: true
        }
      },
      gruntfile: {
          files: ['Gruntfile.js']
      },
      less: {
        files: 'src/less/**/*.less',
        tasks: 'less',
        options: { // less에 livereload 추가설정
          livereload: true
        }
      },
      // watch 에 livereload 를 설정한다.
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'src/html/*.html',
          'src/less/*.less',
          'src/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
        ]
      },
      options: {
        run: true,
        urls: ['http://<%= connect.livereload.options.hostname %>:<%= connect.livereload.options.port %>/index.html']
      }
    },

    less: {
      compileCore: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          "dist/css/<%= pkg.name %>.css": "src/less/**/*.less"
        }
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'dist/css/min/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    csscomb: { // 특정 순서에 CSS 속성을 정렬에 플러그인
      sort: {
        options: {
          config: 'src/less/.csscomb.json' // csscomb.json를 이용해서 속성을 정렬한다.
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    copy:{ // 파일및 폴더 복사
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/{,*/}*.webp',
            '{,*/}*.html',
            'styles/fonts/{,*/}*.*',
            'bower_components/sass-bootstrap/fonts/*.*'
          ]
        }]
      }
    },

    // 서버 셋팅
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            'dist',
            'src'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: 'dist',
          livereload: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-csscomb');

  // 커멘드 라인에 "grunt test"를 입력하면 실행된다.
  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('server', ['connect:livereload', 'watch']);

  // default task는 커멘드 라인에 "grunt"만 입력했을 때 실행할 task들이다.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'copy', 'csscomb']);

};