import React from 'react'
import {Card, Icon, Image} from "semantic-ui-react";

export const CardModal = (props) => {
    let {name, color, date, desc, frnd, image} = props;
    let url = 'https://react.semantic-ui.com/images/avatar/large/';

    return <Card color={color}>
        <Image src={url + image} wrapped ui={false}/>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span className='date'>{date}</span>
            </Card.Meta>
            <Card.Description>
                {desc}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                {frnd}
            </a>
        </Card.Content>
    </Card>
}