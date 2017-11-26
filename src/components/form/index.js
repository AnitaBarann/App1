import React, {Component} from 'react';
import './index.css';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <imput type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;