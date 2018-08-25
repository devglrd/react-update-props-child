import React, {Component} from 'react';

class Child extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShow : props.show
        }
    }

    /*
    Ici je dois faire transiter l'information de l'enfant au parents donc j'utilise un fonction qui est passé en props,
    le parent me passe en props une fonction qui lui permet lui (le parent) d'update le state, une fois le state update, je dois le remettre a jours sur mes composant enfant,
    le nom props de cette fonction est changeValueOfParentState
     */
    componentWillReceiveProps(props){
        console.log("props reçu du component Main au component Child", props);
        console.log("state of child", this.state);
        if (this.state.isShow !== props.show){
            this.setState({
                isShow : props.show
            }, () => console.log("new state of child", this.state))
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.changeValueOfParentState}>Voir la carte</button>
            </div>
        );
    }
}

export default Child
