import React, {Component} from 'react';
import './index.css';


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('wartość search: ' + this.pole.value);
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={field => this.pole = field}/>
                    <input type="submit" value="Search!"/>
                </form>
            </div>
        );
    }
}

export default Search;