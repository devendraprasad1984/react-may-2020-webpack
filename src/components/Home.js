import React, {useRef, useState, useEffect} from 'react';
import {Dropdown} from "semantic-ui-react";
import {success, error, warning} from 'toastr';

export const Home = () => {
    const mform = useRef(null);
    let handleSubmit = (e) => {
        console.log(mform.current, mform.current.childNodes);
        e.preventDefault();
    }
    let semantic_drop_down_check = () => {
        useEffect(() => {
            setCurSel('three');
        }, []);
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

    let promiseCheck = () => {
        const [data, setData] = useState({});
        const [loaded, setLoaded] = useState(false);
        useEffect(() => {
            if (loaded) return;
            handlePromiseData();
            setLoaded(true);
        }, [loaded]);

        // useEffect(() => {
        //     if (typeof data === "undefined" || Object.keys(data).length === 0) return;
        //     console.log('data loaded', data);
        //     success('data is loaded via promises');
        // }, [data]);

        let handlePromiseData = () => {
            console.log('inside promise');
            let alldata = {};
            for (let i = 1; i < 10; i++) {
                fetch('https://jsonplaceholder.typicode.com/todos/' + i)
                    .then(res => res.json())
                    .then(res => {
                        alldata[i] = res;
                        setData(alldata);
                    })
            }
        }
        let checkAfterClick = () => {
            console.log('data state from promise', data)
            for(let i in data){
                console.log('loading from data',i,data[i]);
            }
        }
        return (
            <div>
                <h1>promise checks</h1>
                <button className='btn green' onClick={() => handlePromiseData()}>click promise checks</button>
                <button className='btn yellow' onClick={() => checkAfterClick()}>check state</button>
            </div>
        )
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
            {promiseCheck()}
        </div>
    )
}