# 마크다운(Markdown)

Markdown(마크다운) 에 관련한 폴더입니다.

이 페이지는 마크다운 사용법과 마크다운에 관련한 파일들이 모여있는 폴더입니다.
하위 폴더가 존재할 수 있으며, 하위 폴더만다 마크다운과 관련이 있지만 다른 성격의 파일들이 있을 수 있습니다.

차례.
- [테이블](#table)
- [라인,밑줄](#line)
- [제목 태그,h1,h2..](#heading)
- [인용구](#blockquote)
- [목록 list](#list)
- [공백 들여쓰기 indent](#indent)
- [링크 link](#link)
- [링크를 표현하는 간단한 방법](#%EB%A7%81%ED%81%AC%EB%A5%BC-%ED%91%9C%ED%98%84%ED%95%98%EB%8A%94-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B0%A9%EB%B2%95)
- [강조 Emphasis](#emphasis)
- [코드 code](#code)
- [이미지 images](#images)
- [백슬래시 이스케이프 backslash escapes](#backslash-escapes)


===========================================================================================


아래 사용법에 대한 글은 존 그루버가 마크다운을 번역한 [http://nolboo.github.io/blog/2013/09/07/john-gruber-markdown/](http://nolboo.github.io/blog/2013/09/07/john-gruber-markdown/) 글을 참고했으며 여기서는 간단이 요약만 합니다.

===========================================================================================
마크다운 사용법
=========================================================



## table

참고 사이트 : [테이블](http://michelf.ca/projects/php-markdown/extra/#table "참조사이트")                
테이블은 아래처럼 표로만들면 html 구조상 테이블코드로 만들어진다.
테이블의 해더는 제목셀 아래에 `-----` 을 표시하고 제목과 콘텐츠를 알려줍니다.
맨왼쪽과 맨우측의 `|` 없어도 된다.

셀의 우측정렬은 아래처럼 `우측정렬` 아래 콜론을 붙이면 우측으로 정렬이 된다.

<pre>
| Item      | 우측정렬 |
| --------- | -------:|
| Computer  | $1600   |
| Phone     | $12     |
| Pipe      | $1      |
</pre>

위처럼 왼쪽으로 정렬해서 써도 콜론으로 인해서 우측정렬이 된다.
아래는 예시.

| Item      | 우측정렬 |
| --------- | -------:|
| Computer  | $1600   |
| Phone     | $12     |
| Pipe      | $1      |





## Line
밑줄은 라인은 `*`를 3개이상 넣으면 된다. 또는 `=` 와 `-` 등 여러개 넣으면 된다.    

쓰는 방식.

<pre>타이틀
===================</pre>

위처럼 쓰면 아래처럼 보입니다. 타이틀이란 글자가 자동으로 크게 보여집니다.

타이틀
===================

보시면 자동으로 `heding tag` 가 들어가고 `===================` 은 안보여집니다.





## Heading
제목은 `#` 를 넣으면 된다. `#` 한개면 `<h1>`으로 가장 큰 글씨가 된다. 물론 두개면 `<h2>` 식이다.





## BlockQuote
인용구는 `>` 를 넣으면 된다. 만약 `>`를 두개 넣으면 안으로 더 들여쓰기가 된다.

아래는 예시.
<pre>> 여기는 인용구 예시입니다.</pre>

> 여기는 인용구 예시입니다.





## List
순서없는 목록(ul)은 `*` 또는 `+` 와 `-` 등을 사용해도 같은 결과가 나온다.

아래는 예시.
- 목록1
- 목록2
- 목록3

순서있는 목록(ol)은 숫자다음에 점(.)을 찍으면 된다. 앞의 숫자는 꼭 순서가 맞아야하는것은 아니다 즉 2 5 9식으로 나열해도 같은 결과가 나온다.
만약 마크다운을 지원하는 에디터의 경우(현재 sublimetext 사용) 자동으로 앞에 숫자와 점이 찍힌다.

아래는 예시.

1. 목록1
2. 목록2
3. 목록3





## Indent
공백 들여쓰기는 `*` 를 넣은다음 공백이나 탭을 추가하면된다. 또한 맨끝에 줄바꿈을 하려면 탭이나 빈칸을 여러개 삽입하면 된다.

아래는 예시.
<pre>*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.           
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,              
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.</pre>

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.           
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,              
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.





## Link
링크는 두가지 형식을 지원한다.   
두형식 모두 링크 문자열을 표현할때는 대괄호 `[` 와 `]` 를 사용한다.
인라인 링크를 만들기 위해 링크 문자열을 대괄호로 닫고 이어서 둥근괄호 쌍을 사용한다. 
둥근괄호 안에 링크 URL과 링크에 대한 설명을 추가할 수 있다. 
예를 들면, 다음은:

<pre>이 글은 테스트 예제이며 [링크 문자열](http://example.com/ "Title") 인라인으로 표시되는 예제입니다.</pre>
이 글은 테스트 예제이며 [링크 문자열](http://example.com/ "Title") 인라인으로 표시되는 예제입니다.

만약 같은 서버의 로컬 리소스를 참조하려면 상대 경로를 사용한다:
````html
See my [About](/about/) page for details.
````

참조 형식의 링크는 두 번째에도 대괄호를 사용하며, 그 안에 링크와 대응하는 레이블을 넣는다.:
````html
This is [an example][id] reference-style link.
````

옵션으로 대괄호를 공백으로 분리할 수도 있다:

````html
This is [an example] [id] reference-style link.
````

그리고 문서 아무 곳에서나 다음과 같은 방법으로 링크를 참조할 수 있다:

<pre>[id]: http://example.com/ "Optional Title Here"</pre>

[id]: http://example.com/ "Optional Title Here"

이것은
- 대괄호에는 링크 ID를 포함해야 한다(옵션으로 왼쪽 마진에서 최대 세개의 공백으로 들여쓸 수 있다);
- 콜론이여야 하며;
- 하나 이상의 공백(또는 탭)이 뒤따른다;
- 링크에 대한 URL이 뒤따른다;
- 옵션으로 링크에 대한 제목 속성이 뒤따를 수 있으며, 작은 따옴표나 큰 따옴표로 인용하거나 괄호로 감싸야 한다.


### 링크를 표현하는 간단한 방법

링크텍스트는 `[]` 로 링크는 `()` 에 넣으면 된다.                    
내부링크는 http:를 빼고 넣는다.                
이미지링크는 맨 앞에 `!` 를 넣는다.                     

````html
[외부링크](http://naver.com)
[내부링크](/naver.com)
![이미지링크](http://insanehong.kr/post/haroopress-mardown/@img/insanehong.jpeg)
````

아래는 위코드의 예시.

[외부링크](http://naver.com)                
[내부링크](/naver.com)                  
![이미지링크](http://insanehong.kr/post/haroopress-mardown/@img/insanehong.jpeg)

마크다운은 URL과 이메일 주소를 위한 “자동” 링크를 만드는 간단한 형식을 지원한다: 간단히 URL과 이메일 주소를 꺽쇠 괄호로 감싼다. URL과 이메일 주소의 실제 텍스트를 표시하면서 클릭 가능한 링크로 만들고 싶다면, 다음과 같이 하면 된다:

```html
<http://example.com/>
````

마크다운은 이것을 다음처럼 바꾼다:

````html
<a href="http://example.com/">http://example.com/</a>
````




## Emphasis
마크다운은 별표(`*`)와 밑줄(`_`)을 강조 문자로 다룬다.   
하나의 `*`나 `_`로 감싼 문자열은 HTML `<em>` 태그로 감싸게 된다.     
두개의 `*`나 `_`로 감싸면 HTML `<strong>` 태그로 감싸게 된다. 		
예로, 다음은:

````html
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
````

다음과 같이 출력된다.

````html
<em>single asterisks</em>
<em>single underscores</em>
<strong>double asterisks</strong>
<strong>double underscores</strong>
````

강조는 단어 중간에도 사용할 수 있다. 아래처럼 사용하면,
<pre>이 글은 `*`강조`*`를 표현하기 위한 글입니다.</pre>

아래처럼 보입니다.
이 글은 *강조*를 표현하기 위한 글입니다.

그러나, 만약 *나 _를 공백으로 감싸면 별표와 밑줄 문자 그대로 처리된다.

강조 구분자로 사용하지 않으려면 사용된 위치에서 별표와 밑줄을 표시하기 위해 역슬래시로 예외 처리하면 된다:

<pre>\*this text is surrounded by literal asterisks\*</pre>





## Code.
문자 코드를 삽입하기 위해서는 역따옴표(`)로 감싼다. 정형화된 코드블럭과는 달리 문자 코드는 일반 문단에 삽입되는 코드를 의미한다.

<pre>Use the `printf()` function.</pre>

는 다음처럼 출력된다.
````html
<p>Use the <code>printf()</code> function.</p>
````

문자 코드에 역따옴표를 포함하기 위해 여러 개의 역 따옴표를 사용할 수 있다:

<pre>``There is a literal backtick (`) here.``</pre>

그럼 아래처럼 출력된다.

````html
<p><code>There is a literal backtick (`) here.</code></p>
````

코드블럭은 `<pre>` 나 `<code>` 로 감싸면 된다.
또한 `<` 은 `&lt;` 와 같이 변환해서 넣어줘야 제대로 표시된다. 

`<pre>`로 감싼 형태

````html
<pre><div class="test">test code</div></pre>
````


<pre><div class="test">test code</div></pre>


`<code>`로 감싼 형태

````html
<code><div class="test">test code</div></code>
````

<code><div class="test">test code</div></code>

코드가 아닌 이스케이프시켜야 하는경우는 ` 사이에 넣어줘야 한다.




## Images

인라인 이미지 문법은 다음과 같다:

<pre>![Alt text](/path/to/img.jpg)
![Alt text](/path/to/img.jpg "Optional title")</pre>

말하자면:
- 하나의 감탄사 부호: `!`
- 이미지 `alt` 속성 텍스트을 포함하는, 대괄호(`[]`)가 뒤따른다
- 이미지의 `URL`이나 경로를 포함하는, 괄호가 뒤따른다. 옵션으로 `작은 따옴표`나 `큰 따옴표`로 에워싼 타이틀 속성을 줄 수도 있다.


참조 형식의 이미지 문법은 다음과 같다:
<pre>![Alt text][id]</pre>

여기서 “id”는 정의된 이미지 참조의 이름이다. 이미지 참조는 링크 참조와 동일한 문법으로 정의된다:
<pre>[id]: url/to/image  "Optional title attribute"</pre>

이 글에선 마크다운은 이미지 크기를 지정하는 문법이 없다. 이미지의 크기가 중요하다면 그냥 일반적인 HTML `<img>` 태그를 사용할 수 있다.



## BACKSLASH ESCAPES

마크다운 문법에서 특별한 의미를 갖는 문자를 글자 그대로 사용하려면, 역 슬래시(`\`) 예외처리(escape)를 사용할 수 있다.
예를들어 HTML의 `<em>` 태그 대신에 별표 문자로 하나의 단어를 감싸려면 별표 앞에 역슬래시를 두면 된다.

````html
\*별표 문자\*
````

마크다운은 다음과 같은 문자에 대해 이스케이프를 지원한다:

````html
\   backslash
`   backtick
*   asterisk
_   underscore
{}  curly braces
[]  square brackets
()  parentheses
#   hash mark
+   plus sign
-   minus sign (hyphen)
.   dot
!   exclamation mark
````




