import React from "react";
import "./App.css";
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            active : "basketball"
        }
    }
    render(){
        let labels = ["basketball","Pubg","Tiger","Phone","Laptop","Cricket"];
        return(
            <>
            <center>
            <div>
            {
                labels.map((label)=>
                    <button className={this.state.active === label ? "active" : "" }
                    onClick ={()=>{
                        this.setState({
                            active : label
                        })
                    }}>{label}</button>)
                }
   

            </div>
            <img src={`/assets/${this.state.active}.jpg`} alt="this.state.active" />
            </center>

            </>
        )
    }

}

export default App;