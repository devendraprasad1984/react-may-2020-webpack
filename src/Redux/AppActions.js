import {enums} from "./enums";

export const addTodo = (text) => {
    return {
        type: enums.ADD_TODO
        , text
    }
}
export const delTodo = (index) => {
    return {type: enums.DELETE_TODO, index}
}
export const completeAllTodo = (index) => {
    return {type: enums.COMPLETE_TODO_ALL, index}
}
export const undoAllTodo = (index) => {
    return {type: enums.UNDO_TODO_ALL, index}
}
export const increment = () => {
    return {type: enums.INCREMENT}
}
export const decrement = () => {
    return {type: enums.DECREMENT}
}
export const reset = () => {
    return {
        type: enums.RESET
    }
}
