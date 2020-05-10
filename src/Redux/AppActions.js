import {enums} from "./enums";

export const addTodo = (text) => {
    return {
        type: enums.ADD_TODO
        , text
    }
}
export const delTodo = (index) => {
    return {
        type: enums.DELETE_TODO
        , index
    }
}
export const completeAllTodo = (index) => {
    return {
        type: enums.COMPLETE_TODO_ALL
        , index
    }
}
