import React from "react";


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:0,
        }
    }
        inc=()=>{
        this.setState({
                value:this.state.value+1,
            })
        }

        dec=()=>{
            if(this.state.value>0){
                this.setState({
                    value:this.state.value-1,
                })
            }
            
            }
            
        
    
    render(){
        return  <div className="one">
        <h1>Counter</h1>
        <div className="counter">
        <button class="btn btn-primary" onClick={this.dec}>-</button>
        <h3>The Value is : {this.state.value}</h3>
        <button class="btn btn-danger" onClick={this.inc}>+</button>
        </div>
    </div>
    }
}

export default App;