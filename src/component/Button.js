import React from 'react';
import propTypes from 'prop-types';

import './Button.css';

class Button extends React.Component
{
    static propTypes = {
        name: propTypes.string,
        clickHandler: propTypes.func
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}

export default Button;