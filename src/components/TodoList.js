import React, { useCallback } from "react";
import { useMappedState } from 'redux-react-hook'
import TodoItem from './TodoItem'


export default function TodoList() {
  const mapState = useCallback(state => ({
    lastUpdated: state.lastUpdated,
    todoCount: state.todos.length
  }), [])
  const { lastUpdated, todoCount } = useMappedState(mapState)
  return (
    <div>
      <div>you have {todoCount} todos</div>
      <ul>
        {new Array(todoCount)
            .fill(null)
            .map((_, index) => <TodoItem index={index} key={index} />)}
      </ul>
      <div>
        Last updated: {lastUpdated ? new Date(lastUpdated).toString() : 'never'}
      </div>
    </div>
  )
}