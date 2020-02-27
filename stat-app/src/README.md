# 약간의 설명

## 시작


1. main.js로 부터 시작된다.
2. main.js에서는 App.vue를 이용하여 'App' 컴포넌트를 생성한다.
3. App.vue 에는 <span style='color:red;'>**\<router-view/>**</span> 가 정의 되어 있다. 
4. 이는 router/index.js에 정의되어 있는 라우터를 이용한다.

라우터는 Vue가 생성될 때

```js
new Vue({
  el: '#app',
  router, // <-- 라우터를 파라메터로 넘김.
  template: '<App/>',
  components: { App }
})
```

위와 같이 파라메터로 넘어갑니다. 여기에서 Vue를 생성할 때 사용되는 파라메터를 좀 생각해 봅시다.

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
위와 같이 Vue 클래스는 생성될 때 파라메터로 컴포턴트형의 오브젝트를 파라메터로 갖는다.

