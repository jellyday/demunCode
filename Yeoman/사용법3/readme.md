# Generator install

generator-webapp, generator-ember, generator-angular 등 3개의 제너레이터를 설치한다

설치한 후에는 원하는 제너레이터를 사용해서 프로젝트를 진행할 수 있다.

yeoman, compass, ruby, nodejs 모두 설치되어 있다고 가정하고 진행한다. 		
프로젝트를 진행할 폴더를 만들고 그 폴더에서 실행한다. 	


```
yo

// What would you like to do? 뭘할지 물어온다.
Install a generator
Search NPM for generators: webapp

// generator-webapp 를 선택하여 설치한다.
generator-webapp

// 설치후 Install a generator 를 선택하여 generator 를 더 설치한다.
// Install a generator 를 선택하고 generator-ember을 설치한다.
Install a generator
Here's what I found. Install one?
generator-ember


// 위와 같이 generator-ember 를 설치한다음 똑같이 angular을 설치한다.
Install a generator
Serach NPM for generators: angular
generator-angular
```

여기까지 generator 3개를 설채해봤다.   
generator 마다 진행하는 순서를 알아본다.



## Webapp generator


```
yo
Run the Webapp generator

// webapp generator 를 선택하면 어떤 자바스크립트 프레임워크를 사용할지 물어온다.
// Bootstrap for Sass, RequireJS, Modernizr 개중 원하는 것을 선택하면 설치
RequireJs

// 설치후 grunt server 를 통해 브라우져로 index 파일을 확인할 수 있으며, livereload 도 가동이 된다.
grunt server
```

여기까지 기본적인 설치순서를 알아봤다.    
package.json 파일을 보면 어떤 모듈들이 설치되어 있는지 알수 있다.



## ember or angular



```
// yo ember 또는 yo angular 를 통해 시작이 가능한다.
yo ember

// Would you like to include Twitter Bootstrap for Sass? (Y/n)
// 부트스트랩을 포함할지 물어온다.

grunt server
```

ember 를 통해 설치하는 방법은 위와 같다.

