
import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { ITodos } from '../types';
import { Title, Wrapper } from '../commonstyled/styled';
import { addTodos }  from "../actions/actionsTodo";
import { NUM_CHARACTERS_VALIDATION } from "../types/constants";
 
const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ItemDivider = styled.div`
  padding: 10px
`;

const ButtonDivider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
  padding: 4px;
  width: 200px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
}));

const AddTodos: React.FC = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data:ITodos, e:any) => {
    dispatch(addTodos(data))
    e.target.reset();
  };

  return (
    <Wrapper>  
      <Card className={classes.root} variant="outlined">
      <Title>Add Todo</Title>
      <CardsWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
            <ItemDivider>
                <TextField  id="text"  error={false} label="Text" variant="outlined"  name="text" inputRef={register({
                  validate: value => value.length > NUM_CHARACTERS_VALIDATION
                })}  />
                {errors.text && <ErrorMessage>More than {NUM_CHARACTERS_VALIDATION} characters required.</ErrorMessage>}
            </ItemDivider>
            <ButtonDivider>
              <Button type="submit" variant="contained">Submit</Button>
            </ButtonDivider>
        </form>
      </CardsWrapper>
    </Card>  
  </Wrapper>
  );
};

export default AddTodos;
