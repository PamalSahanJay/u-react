import React, { Component } from 'react'
import '../App.css';

export default class ClassCard extends Component {
    render() {
        console.log("child render")
        return (
            <div className="card">
                <img src={this.props.image} alt="Avatar" style={{ width: '100%' }}></img>
                <div className="container">
                    <h4><b>{this.props.name}</b></h4>
                    <p>{this.props.title}</p>
                    <input type='text' onChange={this.props.onChangeName} value={this.props.name} ></input>
                    <p><button className='button button3' onClick={this.props.onDelete}>Delete</button></p>
                    {/* <div>{prop.children}</div> */}
                </div>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("child should componet update")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {message : "child this is message"};
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log("child component did update", snapshot)
    }

    componentDidMount() {
        console.log("child component did mount") 
    }

    componentWillUnmount() {
        console.log("child component will unmount")
    }
}
