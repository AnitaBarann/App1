import React, {Component} from 'react';
import './index.css';

class Form extends Component {
    constructor(props) {
        super(props)
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            title:'',
            content:'',
            categoty:''
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefoult();
    }

    handleTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleContent(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h3>{(this.state.title !== '' ? 'PROMOCJA! ' + this.state.title : '')}</h3>
                <p>{this.state.content}</p>
                <p>Category: {this.state.category}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <div><input type="text" name="name" onChange={this.handleTitle} /></div>
                    <div><textarea type="text" name="name" onChange={this.handleContent} /></div>
                    <select>
                        <option>Opcja 1</option>
                        <option>Opcja 2</option>
                        <option>Opcja 3</option>
                    </select>
                    <div><input type="submit" value="Wyśłij mnie! " onClick={this.handleSubmit} /></div>
                </form>
            </div>
        );
    }
}

export default Form;

//(operator trójargumentowy)jak wpiszę teks w title to doda się na poszątu "PROMOCJA", a póżniej wyświtli sie reszta pisanego tekstu