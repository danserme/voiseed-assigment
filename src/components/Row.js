import React from 'react';
import Cell from './Cell';

function Row() {
    return (
        <div className={"row"}>
            <Cell title="SOURCE" />
            <Cell title="TARGET" />
        </div>
    );
}

export default Row;