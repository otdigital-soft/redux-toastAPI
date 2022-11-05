import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ITodos } from '../types';
 
const Todo: React.FC<ITodos> = ({ text, id, clickDelete }) => {

  return (
    <ListItem key={id}  ContainerComponent="div">
      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            clickDelete(id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
</ListItem>
  )
  };

export default Todo;
