import React, { Component } from 'react';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state ={
            tasks:[
                'Nauczyć sie do testu',
                'zjeść bulke',
                'posprzatac'
            ]
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                tasks:[
                    'ala', 'ma', 'kota'
                ]
            });
        },5000);
    }


    render(){
        return(
            <div>
                <h2>My to do list</h2>
                <ol>
                    {this.state.tasks.map((task, index)=>(
                        <li key = {index}>{task}</li>
                    ))}
                </ol>
            </div>
        );
    }

}

export default ToDo;
