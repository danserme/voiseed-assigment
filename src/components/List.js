import React from 'react';
import Row from './Row';

const num = 10;

class List extends React.Component {
    
    createRows(){
        let rows = [];
        for (let i = 0; i < num; i++) {
          rows.push(<Row />);
        }
        return rows;
    }

    render() {
        return (
            <div className={"list"}>
                {this.createRows()}
            </div>
        );
    }
}

export default List;