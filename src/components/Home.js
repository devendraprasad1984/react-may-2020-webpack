import React, {useEffect, useRef, useState} from 'react';
import {Dropdown} from "semantic-ui-react";
import {CodeEditor} from "./CodeEditor";
import {CardModal} from "./CardModal";

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
            for (let i = 1; i < 1; i++) {
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
            for (let i in data) {
                console.log('loading from data', i, data[i]);
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

    const coworkers = [
        {first_name: 'Max', last_name: 'Mustermann'},
        {first_name: 'Vladmimir', last_name: 'Leles'},
        {first_name: 'Tobias', last_name: 'Anhalt'},
    ];
    const [workers, setWorkers] = useState(coworkers);
    useEffect(() => {
        workers.map(x => x.status = 'offline');
    }, []);
    let changeStatus = (workerObj, index) => {
        // let worker=workers.filter(x=>x.first_name===workerObj.first_name && x.last_name===workerObj.last_name);
        let worker = workers[index];
        worker.status = worker.status === 'online' ? 'offline' : 'online';
        let updatedWorkers = [...workers];
        updatedWorkers[index] = worker;
        setWorkers(updatedWorkers);
        console.log('workers', workers);
    }
    let testWebbee = () => {
        return workers.map((x, i) =>
            <div key={'id' + i}>
                <div className='leftAlign'><h1>{x.first_name} - {x.last_name} - {x.status}</h1></div>
                <div className='rightAlign'>
                    <button className={x.status === 'offline' ? 'btn red' : 'btn green'} onClick={() => {
                        changeStatus(x, i)
                    }}>{x.status}
                    </button>
                </div>
            </div>
        );
    }

    let cardLayoutStyle = {
        padding:'5px'
        ,margin:'2px'
    }
    let cardMainBox = {
        display: 'flex'
        ,marginBottom: '10px'
        ,overflow:'auto'
        ,position:'relative'
        ,width:'100%'
        ,height:'auto'
        ,flexWrap: 'wrap'
    }
    let cardData = [
        {name: 'Mathew', color:'red', date: '22jan2020', desc: 'wow good', frnd: '22',image:'matthew.png'}
        , {name: 'Elliot', color:'purple', date: '20dec2011', desc: 'wow good', frnd: '555',image:'elliot.jpg'}
        , {name: 'Molly', color:'green', date: '16May2015', desc: 'wow good', frnd: '3212',image:'molly.png'}
        , {name: 'Jenny', color:'orange', date: '01Sep2017', desc: 'wow good', frnd: '928',image:'jenny.jpg'}
        , {name: 'Molly', color:'green', date: '16May2015', desc: 'wow good', frnd: '3212',image:'molly.png'},
        , {name: 'Jenny', color:'blue', date: '01Sep2017', desc: 'wow good', frnd: '928',image:'jenny.jpg'}
        , {name: 'Elliot', color:'purple', date: '20dec2011', desc: 'wow good', frnd: '555',image:'elliot.jpg'}
        ,{name: 'Mathew', color:'red', date: '22jan2020', desc: 'wow good', frnd: '22',image:'matthew.png'}
    ]
    let prepareCardLayout = () => {
        return cardData.map((x,i) =>
            <div key={'cardKey'+i} style={cardLayoutStyle}>
                <CardModal name={x.name} color={x.color} date={x.date} frnd={x.frnd} desc={x.frnd} image={x.image}/>
            </div>
        );
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
            <div style={{width: '70%'}}>
                <h1>online/offline</h1>
                {testWebbee()}
            </div>

            <div style={cardMainBox}>
            {prepareCardLayout()}
            </div>

            <CodeEditor files='Home,TopHoc,Routing'/>
        </div>
    )
}
