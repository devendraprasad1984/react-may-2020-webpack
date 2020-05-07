import React, {useEffect, useState} from 'react';

export const About = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers((data) => {
            setUsers(data);
            // console.log(data);
        });
    }, []); //[] to execute component render exactly once and set state of object users
    let getUsers = (callback) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then((res)=> {callback(res)})
            .catch(err=> {console.log(err)});
    }
    let displayUsers = () => {
        if (users.length === 0) {
            return <h2 className="red">Loading users data, plz wait...</h2>
        }
        users.unshift({name: 'NAME', email: 'EMAIL', username: 'USER NAME', address: {zipcode: 'ZIP'}});
        return <div>{
            users.map((x, id) => <div className='line' key={"disp_user_" + id}>
                <span>{x.name}</span> <span>{x.email}</span> <span>{x.username}</span><span>{x.address.zipcode}</span>
            </div>)
        }
        </div>
    }
    return (
        <div>
            <h1 className="ribbon">About Contents</h1>
            {displayUsers()}
        </div>
    )
}