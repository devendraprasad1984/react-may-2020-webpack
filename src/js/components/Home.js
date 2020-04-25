import React,{useRef} from 'react';

export const Home = () => {
    const mform = useRef(null);
    let handleSubmit = (e) => {
        console.log(mform.current, mform.current.childNodes);
        e.preventDefault();
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
        </div>
    )
}
