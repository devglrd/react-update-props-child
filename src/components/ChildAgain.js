import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildAgain extends Component {
    render() {
        return (
            <div>
                <p>Is Show est : {this.props.show ? "true" : "false"}</p>
            </div>
        );
    }
}

ChildAgain.propTypes = {};

export default ChildAgain;
