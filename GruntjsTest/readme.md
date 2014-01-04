# 파일소개

현재파일은 grunt 를 실행하고 테스트하는 파일들입니다.    
개인적으로만 필요한것이고 다른분들은 필요없는 파일들입니다.   
즉 테스트 파일입니다. 		

추후 완성이 되면 다른 이름으로 업로드 될것입니다.




## Grunt 실행 순서.

- npm install grunt-cli -g
- mkdir g //폴더만들기 md g
- cd g
- npm init
- name,version,description,entry point(index.html),test command, git repository,keywords,author,license 를 물어온다. 테스트용으로 index.html만 만들고 모두 엔터.(그럼 package.json 파일이 만들어진다.)
- cd.
- readme.md // 파일생성.touch 
- npm install grunt --save-dev
- npm install grunt-contrib-less --save-dev
- npm install grunt-contrib-coffee --save-dev
- package.json  열어 모듈설치 확인.
- mkdir less
- cd less
- touch site.less //less 파일생성.
- cd.
- md coffee
- cd coffee
- touch site.coffee
- cd.
- touch index.html
- touch gruntfile.js
- index, less, coffee 작성.
- grunt