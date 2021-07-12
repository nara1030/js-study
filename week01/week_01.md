1주차
=====
## 목차
1. [TODOLIST](#TODOLIST)
2. DDAY
3. [ETC](#ETC)

## TODOLIST
* [localStorage in JavaScript: A complete guide](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
* array vs. array-like object
    * [JavaScript - Difference between Array and Array-like object](https://stackoverflow.com/questions/29707568/javascript-difference-between-array-and-array-like-object)
    * [배열과 유사배열](https://www.zerocho.com/category/JavaScript/post/5af6f9e707d77a001bb579d2)
    * [forEach vs. for in vs. for of](https://n-log.tistory.com/39)
* event
    * [버블링과 캡처링](https://ko.javascript.info/bubbling-and-capturing)
* [How to pass arguments to addEventListener listener function?](https://stackoverflow.com/questions/256754/how-to-pass-arguments-to-addeventlistener-listener-function)

- - -
다시 구현(2021.07.11)

1. html, js, css 각 역할 분리 필요
    * html 속성 이용하면 js 유효성 검사 등 최소화 가능
    * js에서 style 변경 말고, class를 통해 수정
    * class 추가 시 className 대신 classList를 통하면 기존 적용 값 유지
2. js에서 html을 가져오는 방법으로 `querySelector()`를 권장
    * `getElementById()`나 `getElementsByClassName()`과 다르게 css 선택자로 요소 선택 가능
    * 다만 `querySelector()`는 숫자로 시작하는 css 선택자를 지원하지 않으므로 id 생성 시 임의로 문자 t를 붙여줌([참고](https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document))
3. 기본적으로 `const`, 필요시 `let` 사용
    * 두 개 이상 하드 코딩 시 `const`로 선언하면 오타 검출 가능
4. 이벤트를 추가하는 방법에는 두 가지가 있으나, `addEventListener()` 권장
    * 하나는 `onClick()`이었나..?
    * 이벤트 리스너, 즉 콜백 함수는 파라미터 여부와 관계 없으나 파라미터 설정을 해주면 자바스크립트가 호출 시 함께 넘겨줌. 이 파라미터는 event로 기재하는 게 관례.
    * `event.preventDefault()`는 html 기본 동작 방지
    * 한편 배열에서 사용할 수 있는 `forEach()` 메소드도 콜백 함수 전달 가능. 이때 콜백 함수도 파라미터 설정을 해주면 자바스크립트가 호출 시 배열의 요소를 함께 넘겨줌.
5. input 외부 form 태그로 감싸야..? 다시 들어야..
6. localStorage에는 `string`만 저장
    * localStorage에 해당 key에 해당하는 값이 없는 경우 `null` 반환
7. `console.log()` 출력 시 `null`은 `null`로, `""`는 안 찍힘
    * `console.dir()`
8. 삭제 시...
9. 기타
    * alert창 커스터마이징 불가 단점, 모달 사용
    * 함수 정의 내부 함수 호출
    * `appendChild()` 이후 `innerText` 설정. 순서 무관?
    * `HTMLCollection`과 `NodeList`의 차이

- - -
참고

* [노마드 코더 강의](https://nomadcoders.co/javascript-for-beginners/lectures/2899)
* [깃허브](https://github.com/nomadcoders/javascript-for-beginners)

##### [목차로 이동](#목차)

## ETC
* [VSCODE GITHUB 연동](https://velog.io/@blair-lee/VSCode%EC%97%90%EC%84%9C-Github-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%A7%B1%EC%89%AC%EC%9B%80%E3%85%8B%E3%85%8B)
* [VSCODE PLUG-IN: ESLint & Prettier](https://pravusid.kr/javascript/2019/03/10/eslint-prettier.html)

##### [목차로 이동](#목차)