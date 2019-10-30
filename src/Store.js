import { createStore } from 'redux'
import reducer from './reducer'

export function makeStore() {
  return createStore(reducer, {
    lastUpdated: 0,
    todos: [
      'Make the fire!',
      'Fix the breakfast',
      'Wash the dishes!',
      'Do the mopping'
    ]
  }) // createStore 的第二个参数是可选的，用于设置state初始状态。 第一个参数是reducer（是一个纯函数）
}