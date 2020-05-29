import React, {useState, useEffect} from 'react';
import Loader from "./Loader";
import {Divider} from "semantic-ui-react";

const getFromApi = (url) => {
    return fetch(url).then(res => res.json());
}
const photosApi = getFromApi('https://jsonplaceholder.typicode.com/photos');
const albumsApi = getFromApi('https://jsonplaceholder.typicode.com/albums');
const usersApi = getFromApi('https://jsonplaceholder.typicode.com/users');

export const PromiseAll = () => {
    const [photos, setPhotos] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [users, setUsers] = useState([]);
    let resolveAll = () => Promise.all([photosApi, albumsApi, usersApi])
        .then(([photosData, albumsData, usersData]) => {
            return {photosData, albumsData, usersData}
        });//resolveAll
    useEffect(() => {
        if (photos.length === 0 && albums.length === 0 && users.length === 0) {
            resolveAll().then(dataObject => {
                let {photosData, albumsData, usersData} = dataObject;
                console.log('pulled', dataObject);
                setPhotos(photosData);
                setAlbums(albumsData);
                setUsers(usersData);
            });
        }
    }, [photos, albums, users]);
    let displayPhotos = () => {
        let flex={display:'flex',padding:'2px'}
        let pad={paddingLeft:'5px'}
        if (photos.length === 0) return <Loader msg='Photos'/>;
        return photos.splice(1,20).map((x, i) => {
            return <div key={'photo' + i} style={flex}><img className='imgx' src={x.thumbnailUrl}/>
            <h3 style={pad}>{x.title}</h3>
            </div>
        });
    }
    let displayAlbums = () => {
        if (albums.length === 0) return <Loader msg='Albums'/>;
        return albums.map((x, i) => {
            return <div key={'albums' + i}>{x.userId} - {x.title}</div>
        });
    }
    let displayUsers = () => {
        if (users.length === 0) return <Loader msg='Users'/>;
        return users.map((x, i) => {
            return <div key={'users' + i}>{x.name} | {x.email} | {x.phone}</div>
        });
    }
    if(photos.length===0 && albums.length===0 && users.length===0) return <Loader/>
    let lineStyle={backgroundColor:'coral',color:'white',marginTop:'10px'}
    return (
        <div>
            <h1 className="ribbon">JS Async - Promise.All example</h1>
            <h2 style={lineStyle}>Photos</h2>
            <div className='scroll-box'>{displayPhotos()}</div>
            <h2 style={lineStyle}>Albums</h2>
            <div className='scroll-box'>{displayAlbums()}</div>
            <h2 style={lineStyle}>Users</h2>
            <div className='scroll-box'>{displayUsers()}</div>
        </div>
    )
}
