# Webapp generator 를 사용해서 프로젝트 만들기

yeoman, compass, ruby, nodejs 모두 설치되어 있다고 가정하고 진행한다. 		
프로젝트를 진행할 폴더를 만들고 그 폴더에서 실행한다. 	

버젼에 따라 순서가 약간씩 달라서 추가적으로 적는다.

> ember generator 사용법은 ember-generator 를 				
> angular generator 사용법은 angular-generator 폴더를 참고.


```
yo -v
1.1.1
```

버젼확인 후 진행

```
yo

// What would you like to do? 뭘할지 물어온다. 
// 아래중에 하나 선택. 여기서는 Run the Webapp generator 선택

// Run the Angular generator
// Run the Generator generator
// Run the Shop generator
Run the Webapp generator
// Run the Karma generator
// Run the Mocha generator
// Update your generators
// Install a generator
// Find some help
// Get me out of here!

// Move up and down to reveal more choices


// What more would you like? (Press <space> to select)
Bootstrap for Sass
// Modernizr

// 해당 모듈 다운로드

grunt server
```

server 를 입력하면 브라우져로 기본 페이지가 열리고, .tmp, app 폴더가 생성이 된다.

Gruntfile.js 를 보면 설정이 있다.   
기본적으로 server,build,test,default 등의 명령을 사용할 수 있도록 설정되어 있다.




