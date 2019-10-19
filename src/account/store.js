import { createStore } from 'redux'
let store = createStore(actionOnStore)

function actionOnStore(db=[],action){
  switch (action.type) {
    case 'ADD':
      db.push(action.data)
      return db
    break;
     default:
     return db;
     break;
  }
}
export default store;