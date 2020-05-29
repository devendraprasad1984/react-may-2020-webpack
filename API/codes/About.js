import React, {useEffect, useState} from 'react';

export const About = () => {
    let [users, setUsers] = useState([]);
    let getUsers = (call) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then((res)=> {
                // console.log('users fetch',res);
                call(res)
            })
            .catch(err=> {console.log(err)});
    }
    let displayUsers = () => {
        let result=<h2 className="red">Loading users data, plz wait...</h2>
        let display=(data)=> {
            if(typeof data==="undefined") return
            console.log('users data',data);
            data.unshift({name: 'NAME', email: 'EMAIL', username: 'USER NAME', address: {zipcode: 'ZIP'}});
            let returnVal= <div>{
                data.map((x, id) => <div className='line' key={"disp_user_" + id}>
                    <span>{x.name}</span> <span>{x.email}</span> <span>{x.username}</span><span>{x.address.zipcode}</span>
                </div>)
            }
            </div>
            setUsers(returnVal);
        }
        let res=getUsers((data)=>display(data));
        // res.then(x=>console.log(x));
        setUsers(result);
    }
    return (
        <div>
            <h1 className="ribbon">About Contents</h1>
            <div>
                <button className='btn' onClick={()=> {
                    displayUsers();
                }}>Show Users</button>
                <button className='btn' onClick={()=> {
                    setUsers([]);
                }}>Reset</button>
            </div>
            {users}
        </div>
    )
}
