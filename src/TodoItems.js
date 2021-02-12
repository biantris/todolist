import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }


    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};


export default TodoItems;