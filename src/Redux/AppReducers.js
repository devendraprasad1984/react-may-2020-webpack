import {enums} from './enums';
import {mail_fixtures} from "../data/mailbox";

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
    else if (action.type === enums.DONE_TODO) {
        let old = [...state];
        // console.log('old values',old,'deleted',action.index);
        old[action.index].completed=true;
        return [...old];
    }
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
    } else if (action.type === enums.UNDO_TODO_ALL) {
        return state.map((todo) => {
            return Object.assign({}, todo, {completed: false});
        })
    } else
        return state
}

export const CounterReducer = (state = 0, action) => {
    if (enums.INCREMENT === action.type) {
        return state + 1;
    } else if (enums.DECREMENT === action.type) {
        return state - 1;
    } else if (enums.RESET === action.type) {
        return 0;
    } else {
        return state;
    }
}
let initPanel=mail_fixtures.map(x=>x.name);
export const MailerPanelReducer = (state = initPanel, action) => {
    return state;
}
// export const MailerHeaderReducer = (state = 'Inbox', action) => {
//     return action.name||state;
// }
export const MailerListReducer = (state = mail_fixtures, action) => {
    // let initState=[...mail_fixtures.map(x=>JSON.parse(JSON.stringify(x)))];//making a deep copy
    let initState=mail_fixtures;
    if (enums.MAIL_LIST === action.type) {
        console.log('in mail listing',initState.filter(x =>x.name));
        return [...initState.filter(x => x.name === action.name).map(x => x.emails)];
    } else {
        return [...initState.filter(x => x.name === 'Inbox').map(x => x.emails)];
    }
    //whatever i am returning is gonna be my next state be default
}