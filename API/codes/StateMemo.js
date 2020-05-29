import React, {useState} from 'react';
import {Accordion} from 'semantic-ui-react';
import ReduxTodo from "./ReduxTodo";
import BackNext from "./BackNext";
import ReduxMailExample from "./ReduxMailExample";
import QRApp from "./QR";

export const StateMemo = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    let arrIndex = [1, 2, 3, 4, 5];
    let handleAccordClick = (index) => {
        setActiveIndex(index);
    }
    let next = (e, {index}) => {
        console.log('next is called', index)
        setActiveIndex(index + 1)
    }
    let back = (e, {index}) => {
        console.log('back is called', index)
        setActiveIndex(index - 1)
    }
    //if on child compoent conditions are put in to render, it will not maintain state of child components
    // and there concept memoization comes to maintain states of child
    return (
        <div>
            <h1 className="ribbon">ReactJs Child Component State Memoization</h1>
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === arrIndex[0]}
                                 onClick={() => handleAccordClick(arrIndex[0])}> {arrIndex[0]} - Redux Test
                    App</Accordion.Title>
                <Accordion.Content active={activeIndex === arrIndex[0]}>
                    <div>
                        <BackNext index={arrIndex[0]} next={next} back={back}/>
                        <ReduxTodo/>
                    </div>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === arrIndex[1]}
                                 onClick={() => handleAccordClick(arrIndex[1])}> {arrIndex[1]} - QR
                    App</Accordion.Title>
                <Accordion.Content active={activeIndex === arrIndex[1]}>
                    <div>
                        <BackNext index={arrIndex[1]} next={next} back={back}/>
                        <QRApp/>
                    </div>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === arrIndex[2]}
                                 onClick={() => handleAccordClick(arrIndex[2])}> {arrIndex[2]} - Redux
                    Mail</Accordion.Title>
                <Accordion.Content active={activeIndex === arrIndex[2]}>
                    <div>
                        <BackNext index={arrIndex[2]} next={next} back={back}/>
                        <ReduxMailExample/>
                    </div>
                </Accordion.Content>

            </Accordion>
        </div>
    )
}
