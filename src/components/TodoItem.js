import React, { useCallback } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

export default function TodoItem({index}) {
  const mapState = useCallback(state => state.todos[index], [index])
  const todo = useMappedState(mapState)

  const dispatch = useDispatch()

  const deleteTodo = useCallback(
    () => dispatch({ type: 'delete todo', index }),
    [index]
  )
  return (
    <li>
      <span>{todo}</span>
      <button onClick={deleteTodo}>{'delete'}</button>
    </li>
  )
}