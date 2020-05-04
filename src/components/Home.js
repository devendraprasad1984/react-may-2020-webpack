import React, {useRef, useState, useEffect} from 'react';
import {Dropdown} from "semantic-ui-react";

export const Home = () => {
    const mform = useRef(null);
    let handleSubmit = (e) => {
        console.log(mform.current, mform.current.childNodes);
        e.preventDefault();
    }
    let semantic_drop_down_check = () => {
        useEffect(()=>{
            setCurSel('three');
        },[]);
        let [cursel, setCurSel] = useState('');
        let dropdown1 = [
            {id: 1, text: 'one', value: 'one', key: 1}
            , {id: 2, text: 'two', value: 'two', key: 2}
            , {id: 2, text: 'three', value: 'three', key: 3}
        ];
        let onChangeSel = (e, {name, value}) => {
            setCurSel(value);
            console.log('data change', name, value);
        }
        return (<div>
            <h1>semantic ui dropdown</h1>
            <Dropdown
                name='dropdown1'
                options={dropdown1}
                value={cursel}
                onChange={onChangeSel}
            />
        </div>);
    }
    return (
        <div>
            <h1 className="ribbon">Home Contents - OK</h1>
            <div>
                <span className="badge black">HTML5+ReactJs+Babel+CSS+Vanila JS</span>
            </div>
            <h2>testing a way of handling input form</h2>
            <form ref={mform} onSubmit={e => handleSubmit(e)}>
                <input type="text"/>
                <input type="submit" value="Submit" className="btn black"/>
            </form>
            <h1 className="btn orange" onClick={() => {
                alert('I am loving it - wondering how cool it is')
            }}>Final Click</h1>

            {semantic_drop_down_check()}
        </div>
    )
}
