import React from 'react';
import styled from 'styled-components';
import AddTodos from "./AddTodos"; 
import Todos from "./Todos"; 

const WrapperHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const WrapperButtton = styled.div`
  padding: 10px;
`;

const Home: React.FC = () => {
  
  return (
      <WrapperHome>
        <WrapperButtton>
          <Todos />
        </WrapperButtton>
        <WrapperButtton>
          <AddTodos />
        </WrapperButtton>
      </WrapperHome>
  );
};

export default Home;
