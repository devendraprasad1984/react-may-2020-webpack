import {enums} from "./enums";

export const todoActions = () => {
    const addTodo = (text) => {
        return {type: enums.ADD_TODO, text}
    }
    const delTodo = (index) => {
        return {type: enums.DELETE_TODO, index}
    }
    const completeAllTodo = (index) => {
        return {type: enums.COMPLETE_TODO_ALL, index}
    }
    const undoAllTodo = (index) => {
        return {type: enums.UNDO_TODO_ALL, index}
    }
    return {addTodo, delTodo, completeAllTodo, undoAllTodo}
}


export const counterActions = () => {
    const increment = () => {
        return {type: enums.INCREMENT}
    }
    const decrement = () => {
        return {type: enums.DECREMENT}
    }
    const reset = () => {
        return {
            type: enums.RESET
        }
    }
    return {increment, decrement, reset}
}

export const mailerActions = () => {
    const mailList = (name) => {
        console.log('listing name',name);
        return {type: enums.MAIL_LIST,name}
    }
    const headLabel = (name) => {
        return {type: enums.HEAD_LABEL,name}
    }
    const mailPanel = () => {
        return {type: enums.MAIL_PANEL}
    }
    const mailSelection = () => {
        return {type: enums.MAIL_SELECTED_LINE}
    }
    return {mailList, mailPanel, mailSelection,headLabel}
}
