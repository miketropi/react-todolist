import Button from '@atlaskit/button';
import {useAppTodo} from '../lib/context'
import styled, {css} from 'styled-components';

const ButtonStyle = styled.div`
  ${ p => (p.isCompleted && css`text-decoration: line-through;`) }
`;

export default function Todo({task}) {
  const {_id, name, isCompleted} = task;
  const {taskList, setTaskList} = useAppTodo();

  const onCompleted = (id) => {
    setTaskList( prevState => {
      return prevState.map(_task => {
        return _task._id == id ? {..._task, isCompleted: !_task.isCompleted} : _task;
      })
    });
  }

  return (
    <ButtonStyle isCompleted={isCompleted}>
      <Button 
        shouldFitContainer 
        appearance="primary"
        style={{marginTop: '3px'}}
        onClick={() => {
          onCompleted(_id)
        }}>{name}</Button>
    </ButtonStyle>
  )
}