import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Wrapper } from '../commonstyled/styled';
import { setTodos, deleteTodos }  from "../actions/actionsTodo"; 
import Todo from '../components/Todo';
import Toast from '../components/Toast';

const NoTodos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: gray;
`;

const TodosWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87); 
  background-color: #fff;
  padding:20px;
`;

const Todos: React.FC = () => {

  const dispatch = useDispatch();
  const todoList = useSelector( (state :any)  => state.todoReducer);
  const clickDelete = (id:string) => {
    dispatch(deleteTodos(id))
  };

  useEffect(() => {
    dispatch(setTodos());
  }, []);
  
  const noTodos = todoList &&  todoList.length === 0 ? true : false
  
  return (
    <Wrapper>
      <TodosWrapper>
      <Toast/>
      <Title>Todos</Title>
      { noTodos && <NoTodos>No todos yet</NoTodos> }
      { !noTodos && todoList.map( (itemTodo:any, index: number) => 
        <Todo text={itemTodo.text} id={itemTodo._id} key = {itemTodo._id}  clickDelete={clickDelete} />
      )}
      </TodosWrapper>
    </Wrapper>
  );
};

export default Todos;
