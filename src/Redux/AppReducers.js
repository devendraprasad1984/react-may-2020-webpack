import {enums} from './enums';

//reducers are pure function (who return value solely depends on their input) has an action to catch as soon as dispatcher happens, previous state and an action, and return the next state
export const TodosReducer = (state = [], action) => {
    if (action.type === enums.ADD_TODO) {
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ]
    } else if (action.type === enums.TO_DO_LIST)
        return [...state]
    else if (action.type === enums.DELETE_TODO) {
        let old = [...state];
        // console.log('old values',old,'deleted',action.index);
        return [...old.filter((x, i) => i !== action.index)];
    } else if ([enums.COMPLETE, enums.COMPLETE_TODO_ALL].indexOf(action.type) !== -1) {
        // console.log('inside completed & all');
        return state.map((todo, index) => {
            if (index === action.index || action.index === -1000)
                return Object.assign({}, todo, {completed: true});
            return todo
        })
    }else if (action.type === enums.UNDO_TODO_ALL) {
        return state.map((todo) => {
            return Object.assign({}, todo, {completed: false});
        })
    }  else
        return state
}

export const CounterReducer = (state = 0, action) => {
    if (enums.INCREMENT === action.type) {
        return state+1;
    } else if (enums.DECREMENT === action.type) {
        return state-1;
    } else if (enums.RESET === action.type) {
        return 0;
    } else {
        return state;
    }
}