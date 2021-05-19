import React from 'react';

const lorem = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.';
const style = {
    color: 'white',
    backgroundColor: '#404040',
    padding: '10px',
    borderRadius: '8px',
    width: '407px'
}

const Cell = props => {
    return (
        <div style={style}>
            <h4 style={{margin: '0'}}>{props.title} TEXT</h4>
            <p style={{marginTop: '5px', marginBottom: 0}}>{lorem}</p>
        </div>
    );
}


export default Cell;