# git을 사용하는 방법


git을 윈도우에서 사용하기 위해서는 프로그램을 설치해야 한다.   
[git 설치 : windows 버젼설치](http://code.google.com/p/msysgit/downloads/list?can=3)

저장소 만들기 : 해당폴더안에서 git init

저장소 복제 : code clone /로컬/저장소/경로

원격저장소 사용하는 순서.
git 설치 -> 원격저장소에서 ssh 키 발행 -> 원격저장소 생성 -> 로컬에서 원격저장소 clone -> 파일및폴더생성, git add 파일이름 , git commit -m '커밋에대한내용' , git pull origin master (원격저장소별명)(원격저장소 브렌치) 해서 원격저장소와 로컬저장소 병합 -> git push origin master 원격저장소 브렌치 전송

ssh 키 생성하는 방법.
콘솔창에서 ssh-keygen 입력
위에서 경로확인 예: cd /c/Users/컴퓨터이름/.ssh/ 하고 엔터
cat id_rsa.pub 엔터
나오는 코드를 복사
github 사이트에서 SSH Keys를 붙여넣기해서 생성
commit : 추가와 확정
변경된 파일 인덱스에 추가 : git add filename or git add *

변경된 내용을 확정하려면 : git commit -m "확정본에 대한 설명" 그러면 HEAD에 반영됨.(원격저장소에는 반영안됨)

발행 : push
변경된 내용발행하기 : git push origin master 이 명령을 내리면 원격서버로 올라감.

원격저장소에서 복제한것이 아니라면 원격서버주소를 git에게 알려줘야함. git remote add origin 원격서버주소

만약 로그인하지 않았다면 원격서버에 올리면 아이디와 비밀번호를 물어옴.

branch : 가지치기
새로운 저장소를 만들면 기본으로 master 가지가 만들어짐. 가지는 안전하게 격리된 상태에서 작업할때 사용, 차후 변합이 가능함

새로운 가지(branch_x)를 만들고 갈아탑니다. git checkout -b branch_x

master 로 돌아가려면 git checkout master

가지를 삭제하려면 : git branch -d branch_x

merge : 갱신과 병합
로컬저장소를 원격저장소에 맞쳐 갱신하려면 : git pull

다른가지에 있는 변경내용을 현재가지에 병합하려면 : git merge 가지이름

첫번째든 두번째든 git 은 자동으로 병합(merge)을 시도함. 가끔 충돌(conflicts)이 일어남.직접 병합시도해야 됨.

충돌했다면 병합하라고 : git add 파일이름

병합하기전 변경된 내용을 비교하려면 : git diff 원래가지 비교대상가지

tag : 꼬리표 달기
태그뒤에 식별자(고유해야 됨)를 붙여야 함 식별자를 얻으려면 git log 를 통해 얻을수 있음

꼬리표를 달려면 git tag 1.0.0 1b2e1d63ff 뒤에 1b2e1d63ff 가 확정본 식별자 임

되돌리기
실수한경우 로컬의 내용을 되될릴수있다 : git checkout --파일이름 이것은 변경전상태(HEAD)로 되돌림. 인덱스에 추가된 내용과 새로 생성한 파일은 그대로 남음.

로컬의 있는 모든 변경 내용과 확정본을 포기하고, 원격저장소의 최신이력을 가지고 오고, 로컬 master가지가 저 이력을 가리키도록 할려면 : git fetch origin 
git reset --hard origin/master

기타
윈도우에서 git output 컬러로 출력하기 : git config color.ui true

파일을 추가할때 대화식으로 추가하기 : git add -i