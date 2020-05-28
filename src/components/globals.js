import {useState, useEffect} from "react";

export const linksArr = ['/', '/budget'
    , '/about', '/qr', '/pdf_csv', '/redux-todo'
    , '/redux-counter', '/redux-mail'
    , '/simple-hooks', '/peerJs', '/Promise.All'
    ,'/Memoization'
];
export const linksIcon = [
    'large home icon'
    ,'large hand point right icon'
    ,'large indent icon'
    ,'large qrcode icon'
    ,'large file pdf icon'
    ,'large bug icon'
    ,'large bookmark icon'
    ,'large mail icon'
    ,'large code icon'
    ,'large comment icon'
    ,'large at icon'
    ,'large sitemap icon'
];
export const forms = {
    names: ['Project Details', 'Capex/Revx', 'Costs', 'Benefits'],
    0: [{rowName: 'Net Interest Income', cols: [0, 0, 0, 0, 0]}, {
        rowName: 'Input values for ledger',
        cols: [0, 0, 0, 0, 0]
    }, {
        rowName: 'Gross Income Budget',
        cols: [0, 0, 0, 0, 0]
    }],
    1: [{rowName: 'line4', cols: [0, 0, 0, 0, 0, 0, 0]}, {rowName: 'line5', cols: [0, 0, 0, 0, 0, 0, 0]}, {
        rowName: 'line6',
        cols: [0, 0, 0, 0, 0, 0, 0]
    }],
    2: [{rowName: 'line7', cols: [0, 0, 0]}, {rowName: 'line8', cols: [0, 0, 0]}, {
        rowName: 'line9',
        cols: [0, 0, 0]
    }],
    3: [{rowName: 'line10', cols: [0, 0, 0, 0, 0, 0, 0, 0]}, {rowName: 'line11', cols: [0, 0, 0, 0, 0, 0, 0, 0]}, {
        rowName: 'line12',
        cols: [0, 0, 0, 0, 0, 0, 0, 0]
    }]
};
export const fKeys = Object.keys(forms);

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (url !== '') {
            fetch(url)
                .then(response => response.json())
                .then(data => setData(data));
        } else {
            setData([]);
        }
    }, [url]);//[] tell react to load hook only once
    // async function getData() {
    //     if (url !== '') {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setData(data);
    //     }else{
    //         setData([]);
    //     }
    // }
    //
    // useEffect(() => {
    //     getData()
    // }, []);

    return data;
}
