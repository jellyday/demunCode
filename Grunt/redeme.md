# Grunt 사용법

grunt 의 자세한 사용법은 홈페이지나 번역된 사이트를 참고하시기 바랍니다.    
버젼에 따라 사용하는 방법이 약간식 다를수 있습니다. 	
여기서는 제가 사용한 사용법을 기술합니다.

> [grunt](http://gruntjs.com/) 	
> [grunt 번역](http://gurntjs-kr.herokuapp.com/)



# Grunt 실행순서 및 사용법

1. grunt 를 사용하기 위해서는 node.js가 설치되어 있어야 한다. 		
node.js => [http://nodejs.org/](http://nodejs.org/)



2. grunt-cli 설치. 		
제일먼저 할것은 `grunt-cli` 를 설치하는것이다. 이것은 위치(폴더)에서나 실행해도 된다.

```
npm install -g grunt-cli
```



3. 프로젝트 폴더 만들기.
프로젝트 폴더를 만들고 그 안에서 명령을 실행한다.
git 을 사용함으로 저는 아래와 같은 코드로 grunt1 폴더를 만들었습니다.

```
mkdir grunt1
cd grunt1
```

![그림참고](img/0001.jpg)




4. npm init

```
npm init
```

위 코드를 치면기본 사항을 물어온다.
> name: <grunt1> - 프로젝트명이 자동으로 입력되어 있다. 		
> version: <0.0.0> 		
> description:  		
> entry point: <index.js> 			
> test command: 		
> git repository:  		
> keywords: 		
> author: demun - 대문이라고 입력해봤습니다. 			
> license: <BSD-2-Clause> 			
> Is this ok? <yes> 			


여기까지 진행하면 package.json 파일이 만들어진다. 	

![그림참고](img/0002.jpg)

현재까지 만들어진 package.json 코드는 아래와 같다.

```
{
  "name": "grunt1",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "demun",
  "license": "BSD-2-Clause"
}
```



5. npm install grunt --save-dev

grunt 와 플러그인을 설치와 동시에 package.json과 연동시키려면 아래 코드를 입력해야 한다.

```
npm install grunt --save-dev
```

이 구문을 실행시키면 node_modules 폴더와 파일들이 생성되는것을 알 수 있다.  
또한 `package.json` 파일에 `devDependencies` 항목이 추가된다.




6. less 플러그인 설치

[less](https://npmjs.org/package/grunt-contrib-less) 를 사용할것이기 때문에 관련 플러그인을 설치해야 한다. 	

```
npm install grunt-contrib-less --save-dev
```


이제 각종파일들을 만들어보고 프로젝트를 시작해보자.
index.html 을 만들고, less 폴더안에 site.less 를 만들었다.

```
touch gruntfile.js
touch index.html
mkdir less
cd less
touch site.less
```

각 파일들의 코드들도 작성해 둔다.






























