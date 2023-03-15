import { Component } from "react";
import './index.css'

class Counter extends Component{
    state = {counter:0}
    handleButtonClick=()=>{
        console.log("button clicked")
        this.setState((prevState)=>({counter : prevState.counter+1}))
    }
    render(){
        let {counter} = this.state
        return (
            <div className="mycontainer">
                <h1 className="heading">The Button Has Been Clicked<br /><span className="counter-color">{counter}</span> times</h1>
                <p className="count-para">Click the button to increase the count!</p>
                <button className="my-button" onClick={this.handleButtonClick}>Click Here</button>
            </div>
        )
    }
}
export default Counter