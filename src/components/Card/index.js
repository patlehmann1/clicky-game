import React from 'react';
import './Card.css';

const Card = props => (
        <div onClick= {() => props.handleGame(props.id)}
        className='card' key={props.id}>
            <img alt={props.letter} src={props.image} />
        </div>
    );

export default Card;