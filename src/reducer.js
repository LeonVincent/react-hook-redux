export default function reducer(
  state,
  action
) {
  if(!state) {
    return null
  }
  switch (action.type) {
    case 'add todo' : {
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo)
      }
    }

    case 'delete todo' : {
      const todos = state.todos.slice()
      todos.splice(action.index, 1)
      return {
        ...state,
        lastUpdated: Date.now(),
        todos
      }
    }
    default: 
      return state
  }
}