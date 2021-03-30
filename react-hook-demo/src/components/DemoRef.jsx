 import React,{ Component } from "react";


export default class DemoRef extends Component{
    constructor(){
        super()
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.myRef = React.createRef();
    }
    componentDidMount(){
         this.myRef.current.focus()
    }
    handleOnAdd(){
        console.log("click")
         
        console.log(this.myRef.current.value)
    }
    render(){
        return (
            <div>
                <h1>Demo Ref</h1>
                 
                <input  type="text" ref={this.myRef} />
                <button onClick={this.handleOnAdd}>Add </button>
                <button ref={() => console.log('logger')}>Mount </button>
            </div>
        )
    }
}