import React, {Component} from 'react';
import Child from "./Child";
import Card from "./Card";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow : false
        }
    }

    /*
    ici je change la valeur du state, et je passes cette fonction en props a mon composant Child, le props aura comme nom changeValueOfParentState et contiendra la fonction handleinput
     */
    handleCard = () => {
        this.setState({
            isShow : !this.state.isShow},
            () => console.log("state of parent",this.state)
        );
    }

    render() {
        return (
            <div>
                <Child show={this.state.isShow} changeValueOfParentState={this.handleCard} />
                {this.state.isShow ? <Card /> : null}
            </div>
        );
    }
}


export default Main;