//reducers are pure function (who return value solely depends on their input) has an action to catch as soon as dispatcher happens, previous state and an action, and return the next state

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export const TodosObject = (state = [], action) => {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ]
    } else if (action.type === 'TO_DO_LIST')
        return [...state]
    else if (['COMPLETE_TODO', 'COMPLETE_TODO_ALL'].indexOf(action.type) !== -1) {
        // console.log('inside completed & all');
        return state.map((todo, index) => {
            if (index === action.index || action.index === -1000)
                return Object.assign({}, todo, {completed: true});
            return todo
        })
    } else
        return state
}
