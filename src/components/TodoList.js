
import Todo from './Todo';

export default function TodoList({task}) {
  return (
    <>
      <h4>Todo List:</h4>
      {
        task.length > 0 &&
        task.map((item) => {
          return (
            <Todo key={item._id} task={item} /> 
          )
        })
      }
    </>
  )
}