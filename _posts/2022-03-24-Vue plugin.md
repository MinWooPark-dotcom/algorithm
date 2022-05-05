---
title: "Vue plugin"
# author: Chas
daata: 2022-03-24
category: Vue.js
layout: post
---
# Today I Learned

vue 프로젝트 구조에 대해, 그 중에서도 plugin 사용에 대한 주제로 얘기를 나눠보려고 합니다.
작업을 하면서 이곳 저곳에서 app을 인자로 받으며 `app.config.globalPropertie` 에 접근하는 경우가 많았습니다.

plugins에 대해 이야기 하려면 app에 대해 얘기를 해야 합니다.

app와 관련지어 plugins을 얘기하되, 프로젝트 구조를 이해하는데 도움이 되는 만큼만 간단히 짚고 넘어가겠습니다.

목차 

1. app은 무엇인가
2. app은 어디서 만들어졌는가
3. app은 어디서 쓰이는가
4. app은 왜 쓰이는가
5. 그래서 Plugin을 어떻게 사용하는가

---
## 1. app은 무엇인가?

### app의 출발점: main.js

먼저 main.js는 프로젝트를 실행할 때 가장 먼저 실행되는 javascript 파일입니다.
해당 파일은 Vue 인스턴스를 생성하는 역할을 합니다.

모든 Vue 어플리케이션은(Vue3) `createApp` 함수를 사용하여 새로운 **어플리케이션 인스턴스**를 생성하여 시작합니다
5번 라인에서 해당 작업이 이루어집니다.

이는 기존의 뷰 인스턴스 생성하는 것과 같습니다.

```jsx
// Vue2에서의 Vue instance 생성법
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
```

### console.log에서 app의 모습

![](https://images.velog.io/images/qmasem/post/a78d0705-e8e0-4081-9967-9545a3ee0187/Screen%20Shot%202022-03-24%20at%209.57.42%20AM.png)

여기서는 config.globalProperties를 주목해서 봐주시기를 바랍니다.

---

## 2. app은 어디서 만들어졌는가?

앞서 말씀드린 것처럼 main.js에서 만들어지며 이는 는 프로젝트를 실행할 때 가장 먼저 실행되는 javascript 파일입니다.
해당 파일은 Vue 인스턴스를 생성하는 역할을 합니다.

---

## 3. 어디서 쓰이는가?

/apis, /plugins, /store등 화면 단을 구성하는 .vue 파일 외 대부분 .js파일에서 app을 인자로 받아 사용합니다.

그렇다면 어떤 이유로 사용되며 app은 어디서 만들어지고 어디서 매개변수로 넣는 것인지 살펴보겠습니다.

---

## 4. app은 왜 쓰이는가?

이번에는 **플러그인**에 중점을 두고 설명하겠습니다.

/apis에서는 `app.config.globalProperties` 을 통해 그 안에 넣어둔 플러그인을 사용하게 됩니다.

`app.config.globalProperties` 은 무엇이고 어떤 근거로 사용이 되느냐 하면 Vue 공식 홈페이지를 참고할 수 있습니다.

Vue에서 플러그인을 사용할 때 엄격한 정의된 범위는 없지만 보통 5가지의 방식이 있다고 합니다.

일반적으로 플러그인이 유용한 시나리오는 다음과 같습니다.

1. 약간의 전역 메소드 또는 속성 추가, 예. vue-custom-element (opens new window).

2. 하나 이상의 글로벌 에셋 추가 : 디렉티브 / 필터 / 트랜지션 등. (예. vue-touch (opens new 
window)).

3. 글로벌 mixin으로 일부 컴포넌트 옵션 추가(예. vue-router (opens new window)).

4. 일부 전역 인스턴스 메서드를 config.globalProperties에 연결하여 추가.

5. 가지고 있는 API를 제공하면서 동시에 위의 일부 조합을 주입하는 라이브러리 (예. vue-router (opens new window)).


출처: [Vue 공식 홈페이지](https://v3.ko.vuejs.org/guide/plugins.html#%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)

---

## 5. 그래서 Plugin을 어떻게 사용하는가?

플러그인은 일반적으로 Vue에 전역 수준의 기능을 추가하는 self-contained 코드입니다. 

객체 또는함수를 install()메소드를 통해 제공합니다.

플러그인으로 사용하려면 app.config.globalProperties에 $api, $auth 같은 플러그인 객체 또는 메서드를 를 넣어야 합니다.

사용하고 싶은 함수를 넣어서 사용하면 됩니다.

app.config.globalProperties에 plugin을 넣기 위해서는 

각 플러그인 .js 파일에서 아래의 템플릿을 사용하시면 app.config.globalProperties.$pluginName으로 접근하여 글로벌로 사용할 수 있습니다. 

```jsx
const pluginName = {
	install (app) {
		app.config.globalProperties.$pluginName = ... 
	}
}
```

플러그인 작성하기에 대한 설명도 [플러그인-작성하기](https://v3.ko.vuejs.org/guide/plugins.html#%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB-%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5) 를 참고하시면 좋습니다.

---

## 마무리

vue의 프로젝트 구조에서 /plugins/tool.js가 어떻게 만들어졌으며, 어떠한 이유로 사용할 수 있는지, 그리고 tool에 메서드를 직접 만들어 가져다 쓸 수 있는 방법을 떠올릴 수 있기를 바라며 위와 같은 주제로 얘기를 나눴습니다.
감사합니다.