export const setVisibilityAction = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER'
        , filter
    }
}
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO'
        , text
    }
}
export const completeAction = () => {
    return {
        type: 'COMPLETE_TODO'
    }
}
