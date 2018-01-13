import React, {Component} from 'react';
import Task from './Task';


class Container extends Component {

    constructor(props) {
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            task: '',
            tasks: []
        };
    }

    textChanged(event) {
        this.setState({task: event.target.value})
    }

    searchChanged(event) {
        this.setState({query: event.target.value})
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault()
    }

    render() {
        return (
            <div>

                <h2>DODAJ NOWE ZADANIE</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           value={this.state.task}
                           placeholder="Add task..."
                           onChange={this.textChanged}/>
                    <input type="submit" value="Add"/>
                </form>

                <h2>wyszukaj zadanie</h2>
                <input type="text" placeholder="Search..." onChange={this.searchChanged}/>
                <input type="submit" value="Search!"/>

                <h2>My task</h2>
                {
                    this.state.tasks
                        .filter((task) => task.indexOf(this.state.query) !== -1)
                        .map((task, index) => (
                            <Task key={index} label={task}/>
                        ))
                }

            </div>
        );
    }
}


export default Container