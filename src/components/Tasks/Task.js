import React, { Component } from 'react';

class Task extends Component{

    constructor(props) {
        super(props);
        this.state = {
            check: false
        }

    }

    renderLabel() {
        if(this.state.checked) {
            return (
                <span style={{textDecoration: 'line-trough'}}>
                    {this.props.label}
                </span>
            );
        }
        return this.props.label;
    }

    handleChange(event) {
        this.setState({ checked: event.target.checked});
}


    render() {
        return(
            <div>
                <input type="checkbox" onChange={this.props.handleChange} />
                {this.renderLabel()}
            </div>
        );
    }
}

export default Task
