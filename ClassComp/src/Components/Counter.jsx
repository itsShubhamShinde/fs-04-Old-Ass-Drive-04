import { Component } from 'react'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }


    render() {
        return <div style={{ boxShadow: "0px 0px 10px gray", width: "500px", height: "200px", margin: "100px auto", paddingTop: "20px" }}>
            <h1 style={{color:"blue"}}>Count Value : {this.state.count}</h1>
            <br />
            <div className="buttonDiv">

            <button style={{ padding: ".5rem 1rem", borderRadius: "5px", backgroundColor: "black", color: "white" }} onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button> 
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{ padding: ".5rem 1rem", borderRadius: "5px", backgroundColor: "black", color: "white" }} onClick={() => this.setState({ count: this.state.count - 1 })}>Decrease</button>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <button style={{ padding: ".5rem 1rem", borderRadius: "5px", backgroundColor: "black", color: "white" }} onClick={() => this.setState({ count: 0 })}>Reset</button>
            </div>

        </div>
    }
}

export default Counter