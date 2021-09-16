import {userState, useEffect, useCallback, useState} from 'react';
import Texfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import TodoList from './components/TodoList';
import {v4} from 'uuid';
import styled from 'styled-components';
import {useAppTodo} from './lib/context';

const Container = styled.div`
  width: 560px;
  padding: 0 20px;
  margin: 5vh auto;
  max-width: 100%;
`;

function App() {
  const [value, setValue] = useState('');
  const {taskList, setTaskList} = useAppTodo();

  const onSubmit = (e) => {
    e.preventDefault();
    setTaskList([{
      _id: v4(),
      name: value,
      isCompleted: false,
    }, ...taskList]);

    setValue('')
  }

  const onChange = (taskID) => {
    setTaskList(prevState => {
      return prevState.map(_task => (_task._id == taskID ? {..._task, isCompleted: !_task.isCompleted} : _task))
    })
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Texfield
          placeholder="Add to do list..."
          value={value}
          onChange={e => setValue(e.target.value)}
          elemAfterInput={
            <Button
              style={{marginRight: '2px'}}
              isDisabled={!value}
              appearance='primary'>Add Task</Button>
          }/>
      </form> 
      <TodoList task={taskList} />
    </Container>
  );
}

export default App;
