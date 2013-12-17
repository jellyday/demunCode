# git을 사용하는 방법

윈도우에서 콘솔창을 사용하여 git을 사용하는 방법을 알아본다.
먼저 순서를 알고 그에 맟쳐 진행한다.


목차
- [원격저장소 사용하는 순서](%EC%9B%90%EA%B2%A9%EC%A0%80%EC%9E%A5%EC%86%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%88%9C%EC%84%9C)
- [git 설치](git-%EC%84%A4%EC%B9%98)
- [ssh 키 생성하는 방법](ssh-%ED%82%A4-%EC%83%9D%EC%84%B1%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95)
- [원격저장소 생성](%EC%9B%90%EA%B2%A9%EC%A0%80%EC%9E%A5%EC%86%8C-%EC%83%9D%EC%84%B1)
- [저장소 복제](%EC%A0%80%EC%9E%A5%EC%86%8C-%EB%B3%B5%EC%A0%9C)
- [git add](git-add)
- [commit](commit)
- [pull](pull)
- [push : 발행하기](push--%EB%B0%9C%ED%96%89%ED%95%98%EA%B8%B0)
- [branch : 가지치기](branch--%EA%B0%80%EC%A7%80%EC%B9%98%EA%B8%B0)
- [merge : 갱신과 병함](merge--%EA%B0%B1%EC%8B%A0%EA%B3%BC-%EB%B3%91%ED%95%A9)
- [tag : 꼬리표달기](tag--%EA%BC%AC%EB%A6%AC%ED%91%9C-%EB%8B%AC%EA%B8%B0)
- [되돌리기](%EB%90%98%EB%8F%8C%EB%A6%AC%EA%B8%B0)
- [기타](%EA%B8%B0%ED%83%80)


------------------------------------------


## 원격저장소 사용하는 순서.
- git 설치
- 원격저장소에서 ssh 키 발행
- 원격저장소 생성
- 로컬에서 원격저장소 clone
- 파일 및 폴더생성 및 작업
- `git add 파일이름`
- `git commit -m '커밋에대한내용'`
- `git pull origin master (원격저장소별명)(원격저장소 브렌치)` 해서 원격저장소와 로컬저장소 병합 
- `git push origin master` 원격저장소 브렌치 전송




## git 설치
git을 윈도우에서 사용하기 위해서는 프로그램을 설치해야 한다.
[git windows 버젼설치하러 가기](http://code.google.com/p/msysgit/downloads/list?can=3)





## ssh 키 생성하는 방법.

- 콘솔창에서 ssh-keygen 입력
- 위에서 경로확인 예: /c/Users/컴퓨터이름/.ssh/id_rsa
- `cd /c/Users/컴퓨터이름/.ssh/` 를 입력해서 해당 폴더로 간다.
- `ls -al` 를 입력하면 해당 폴더를 볼 수 있다. 해당폴더에서 id_rsa.pub 를 확인한다
- 콘솔창에서 `cat id_rsa.pub` 엔터
- 긴 코드가 나오는데 그것이 key 다. 나온 key 코드를 복사
- github 사이트에서 SSH Keys를 붙여넣기해서 생성





## 원격저장소 생성
원격저장소는 github.comd 에서 생성하면 된다.
- Repositories 를 클릭
- New를 클릭해서 생성한다.
- Repository name 을 입력.
- Description 설명입력
- Public 공개을 선택하고 입력
- Initialize this repository with a README 체크하고 생성 Create repository 클릭하면 생성.






## 저장소 복제
로컬 컬퓨터에서 해당 저장소를 복제한다.

```git
code clone /로컬/저장소/경로
```

복제하지 않고 그냥 로컬에서 작업을 하려면 git 버젼관리를 시작하기 위해 해당폴더안에서 아래와 같은 명령어를 입력하면 된다.

```git
git init
```

그러면 git 버젼관리가 시작된다.





## git add
파일을 수정하거나 또는 생성하면 git 에게 파일이 수정됐다는 것을 알린다. 그것이 add

```git
git add filename
```





## commit
add 를 해서 git에게 수정하거나 생성한 파일을 알리면 그 다음 커밋을 한다.
변경된 내용을 확정하려면 : git commit -m "확정본에 대한 설명" 그러면 HEAD에 반영됨.(원격저장소에는 반영안됨)

```git
git commit -m "설명"
```




## pull
발행하기전 먼저 원격저장소에 있는것과 로컬컴퓨터에 병합 과정을 거친다.

```git
git pull
```
or 

```git
git pull master
```






## push : 발행하기
변경된 내용발행하기 : 이 명령을 내리면 원격서버로 올라감. 

```git
git push origin master
```


원격저장소에서 복제한것이 아니라면 원격서버주소를 git에게 알려줘야함. 

```git
git remote add origin 원격서버주소
```

만약 로그인하지 않았다면 원격서버에 올리면 아이디와 비밀번호를 물어옴.





------------------------------------------------------

일반적으로 작업은 여기까지 아래는 기타 사항

-------------------------------------------------------





## branch : 가지치기
새로운 저장소를 만들면 기본으로 master 가지가 만들어짐. 
가지는 안전하게 격리된 상태에서 작업할때 사용, 차후 변합이 가능함
새로운 가지(branch_x)를 만들고 갈아탑니다. 

```git
git checkout -b branch_x
```

master 로 돌아가려면 

```git
git checkout master
```

가지를 삭제하려면 

```git
git branch -d branch_x
```





## merge : 갱신과 병합
로컬저장소를 원격저장소에 맞쳐 갱신하려면 : 

```git
git pull
```

다른가지에 있는 변경내용을 현재가지에 병합하려면 : 

```git
git merge 가지이름
```

첫번째든 두번째든 git 은 자동으로 병합(merge)을 시도함. 가끔 충돌(conflicts)이 일어남.직접 병합시도해야 됨.
충돌했다면 병합하라고 : 

```git
git add 파일이름
```


병합하기전 변경된 내용을 비교하려면 : 

```git
git diff 원래가지 비교대상가지
```



## tag : 꼬리표 달기
태그뒤에 식별자(고유해야 됨)를 붙여야 함 식별자를 얻으려면 `git log` 를 통해 얻을수 있음
꼬리표를 달려면 `git tag 1.0.0 1b2e1d63ff` 뒤에 `1b2e1d63ff` 가 확정본 식별자 임






## 되돌리기
실수한경우 로컬의 내용을 되될릴수있다

```git
git checkout --파일이름
```

이것은 변경전상태(HEAD)로 되돌림. 
인덱스에 추가된 내용과 새로 생성한 파일은 그대로 남음.

로컬의 있는 모든 변경 내용과 확정본을 포기하고, 원격저장소의 최신이력을 가지고 오고, 
로컬 master가지가 저 이력을 가리키도록 할려면 : 

```git
git fetch origin
```
or 

```git
git reset --hard origin/master
```



## 기타
윈도우에서 git output 컬러로 출력하기 : 

```git
git config color.ui true
```

파일을 추가할때 대화식으로 추가하기 : 

```git
git add -i
```

