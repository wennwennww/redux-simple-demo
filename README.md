# Redux simple demo with JavaScript

using webpack frontend starterkit with [webpack-starter · GitHub](https://github.com/wbkd/webpack-starter/issues)

### What is Redux?
[Redux - A predictable state container for JavaScript apps. | Redux](https://redux.js.org/)
簡單來說就是一個全域的管理器，管理你所需要用到的狀態

> Redux跟React並沒有關係，你可以使用React、Angular或原生JS來寫Redux；跟Vuex是專為Vue設計的狀態管理框架不同，即使他們名字也是滿像的。

### Redux 三大原則
1. 只有一個 store
2. store 唯讀
3. 需要使用 Reducer(pure function) 來修改state的值

### 簡易概念介紹

#### Reducer
用來保管state，以及接收action指令，定義應該對state做什麼動作的一個純函數。

```javascript

/* 每一個 Reducer 都會有兩個參數，第一個參數會將資料狀態 state 交由 Reducer 保管，第二個參數會傳入現在 reducer 要對 state 做什麼動作的指令及額外的參數 */

const reducer = (state = 0, action) => {
	switch case () {
	  case "addCounter" :
		return state ++;
	  default :
		return state;
	}
}

```

#### Store
創建完上述的Reducer pure function 後，必須將它交給store管理，store的工作就是在app中負責整合所有的Reducer

```javascript
import { createStore } from 'redux'

const store = createStore(reducer);

```

#### Action
Action是store唯一的資訊來源，藉由redux store提供的dispatch方法，將所需要的資訊payload傳遞給store，再藉由reducer去更改出想要的結果。
Action只給你資訊，並沒有處理該對資訊做什麼事情，這是reducer的任務。

### Reference
[Read Me | Redux](https://chentsulin.github.io/redux/)
[Redux vs Vuex for state management in Vue.js | Codementor](https://www.codementor.io/@petarvukasinovic/redux-vs-vuex-for-state-management-in-vue-js-n10yd7g2f)
