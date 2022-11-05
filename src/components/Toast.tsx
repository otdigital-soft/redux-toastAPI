import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ADD_TODOS,
    DELETE_TODOS,
    TODO_DELETED,
    TODO_ADDED
} from "../types/constants";

export const toastNotify = (input:any, actionType: string) => { 
    const {error, createDate} = input
    if (error) {
        toast.error(error)
    }
    if(createDate) {
        if (actionType === DELETE_TODOS)
            toast.success(TODO_DELETED)  
        if (actionType === ADD_TODOS)
            toast.success(TODO_ADDED)      
    }
};

const Toast: React.FC = () => <ToastContainer autoClose={3000} />

export default Toast;