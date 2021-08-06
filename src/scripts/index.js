require('../index.html');

import { createStore } from 'redux';

// 1. create reducer
function addTodoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [action.text, ...state];
    default:
      return state;
  }
}

// 2. create store
const store = createStore(addTodoReducer);

function render() {
  // getState是store提出的方法，有點像是vuex的getter
  const items = store.getState().map(item => (
    (item) ? `<li>${item}</li>` : ''
  ));
  document.getElementById('list').innerHTML = `<ul>${items.join('')}</ul>`;
}

render();

// 3. 訂閱render到store，store中如果有新的state時，會re render，類似useEffect最後一個陣列參數
store.subscribe(render);

document.getElementById('btn-add')
  .addEventListener('click', () => {
    const itemText = document.getElementById('input-todo');
    // 4. 使用action來告知store觸發reducer更改state
    store.dispatch({ type: 'ADD', text: itemText.value });
    itemText.value = '';
  });

