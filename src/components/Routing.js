import React from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import  {linksArr} from './globals';
import {Home} from './Home';
import {Budget,DisplayBudgetForms} from './BudgetForm';
import {About} from './About';
import {NotFound} from './NotFound';
import {QRApp} from './QR';
import {PdfCsv} from './PDF_CSV';
import ReduxTest from "./ReduxTest";

const iconNames = linksArr;
const handleActive = (e) => {
    let navLinks = Object.values(document.getElementsByClassName('sidenav')[0].children);
    navLinks.map(x => x.className = '');
    let cur = e.target;
    cur.className = 'active';
}
const nav = (curIndex) => {
    return (<div>
        <div className="bg-dark sidenav">
            {iconNames.map((x, i) => <Link key={'id_key_'+x} to={x} className={i === curIndex ? 'active' : ''} onClick={(e) => {
                handleActive(e)
            }}>{x === '/' ? 'Home' : x.replace('/', '')}</Link>)}
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
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </HashRouter>
}
