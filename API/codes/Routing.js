import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import {linksArr, linksIcon} from './globals';
import {Home} from './Home';
import {Budget, DisplayBudgetForms} from './BudgetForm';
import {About} from './About';
import {NotFound} from './NotFound';
import QRApp from './QR';
import {PdfCsv} from './PDF_CSV';
import ReduxTest from "./ReduxTodo";
import CounterRedux from "./CounterRedux";
import ReduxMailExample from "./ReduxMailExample";
import SimpleHooks from "./SimpleHooks";
import ReduxPeerJS from "./ReduxPeerJS";
import {PromiseAll} from "./PromiseAll";
import {StateMemo} from "./StateMemo";

const iconNames = linksArr;
const icons = linksIcon;
const handleActive = (e) => {
    let navLinks = Object.values(document.getElementsByClassName('sidenav')[0].getElementsByTagName('a'));
    navLinks.map(x => x.className = '');
    let cur = e.target;
    cur.className = 'active';
}
let navStyle={overflow:'auto',position:'relative',height:'90vh'};
const nav = (curIndex) => {
    return (<div>
        <div className="bg-dark sidenav">
            {iconNames.map((x, i) =>
                <span key={'navspan'+i}>
                    <i className={icons[i]}></i>
                    <Link
                        key={'id_key_' + x}
                        to={x}
                        className={i === curIndex ? 'active' : ''}
                        onClick={(e) => {
                            handleActive(e)
                        }}> {x === '/' ? 'Home' : x.replace('/', '')}
                    </Link>
                </span>
            )}
        </div>
        {/*{props.children}*/}
    </div>)
};
//these are react functional stateless components, you can use hooks for state management
export const SetRouting = () => {
    const iconNames = linksArr;
    let curLink = window.location.hash.replace('#', '');
    let curIndex = iconNames.map(y => y.indexOf(curLink) !== -1).indexOf(true);
    return <HashRouter>
        <div>
            {nav(curIndex)}
            <Switch>
                <Route exact path={iconNames[0]}><Home/></Route>
                <Route path={iconNames[1]}><Budget title={'Budget Input Form'}
                                                   callback={DisplayBudgetForms}/></Route>
                <Route path={iconNames[2]}><About/></Route>
                <Route path={iconNames[3]}><QRApp/></Route>
                <Route path={iconNames[4]}><PdfCsv/></Route>
                <Route path={iconNames[5]}><ReduxTest/></Route>
                <Route path={iconNames[6]}><CounterRedux/></Route>
                <Route path={iconNames[7]}><ReduxMailExample/></Route>
                <Route path={iconNames[8]}><SimpleHooks/></Route>
                <Route path={iconNames[9]}><ReduxPeerJS/></Route>
                <Route path={iconNames[10]}><PromiseAll/></Route>
                <Route path={iconNames[11]}><StateMemo/></Route>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </HashRouter>
}
