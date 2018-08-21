import React, { Component } from 'react';
import Item from '../Item';

class List extends Component {
    state = {
        listData: [
            {
                text: 'Item 1',
                id: '001'
            },
            {
                text: 'Item 2',
                id: '002'
            },
            {
                text: 'Item 3',
                id: '003'
            },
            {
                text: 'Item 4',
                id: '004'
            },
            {
                text: 'Item 5',
                id: '005'
            }
        ]
    }

    removeItem(index){
        const listCopy = this.state.listData.slice();

        listCopy.splice(index, 1);

        this.setState({
            listData: listCopy
        });
    }

    render(){
        const listElements = this.state.listData.map( (item, index) => {
            return <Item key={index} remove={() => this.removeItem(index)}>{item.text}</Item>;
        });

        return (
            <ul className="collection">
                {listElements}
            </ul>
        );
    }
}

export default List;
