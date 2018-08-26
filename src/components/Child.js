import React, {Component} from 'react';
import ChildAgain from "./ChildAgain";

class Child extends Component {
    /*
    Ici je dois faire transiter l'information de l'enfant au parents donc j'utilise un fonction qui est passé en props,
    le parent me passe en props une fonction qui lui permet lui (le parent) d'update le state, une fois le state update, je dois le remettre a jours sur mes composant enfant,
    le nom props de cette fonction est changeValueOfParentState


    "est-ce que c'est une donnée qui m'appartient à moi (composant child), auquel cas je le garde dans mon state, ou est-ce que c'est quelque chose qu'on me donne, auquel cas c'est une prop (dans le cas présent show n'est pas une donnée apartenent au component Child, elle restera en props
     */
    // componentWillReceiveProps(props){
    //     console.log("props reçu du component Main au component Child", props);
    //     console.log("state of child", this.state);
    //     if (this.state.isShow !== props.show){
    //         this.setState({
    //             isShow : props.show
    //         }, () => console.log("new state of child", this.state))
    //     }
    // }

    render() {
        return (
            <div>
                {this.props.show ? <p>isShow true</p> : <p>isShow false</p>}
                <button onClick={this.props.changeValueOfParentState}>Voir la carte</button>
                <ChildAgain show={this.props.show} />
            </div>
        );
    }
}

export default Child
