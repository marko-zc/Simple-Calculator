import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

import "./ButtonPanel.css";

class ButtonPanel extends React.Component
{
    static propTypes = {
        clickHandler: propTypes.func,
      };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
        <div>
            <div className='clear'>
                <Button name='C' clickHandler={this.handleClick} />
            </div>


        <div className="panel">
            <div>
                <Button name='7' clickHandler={this.handleClick} />
            </div>
            <div>   
                <Button name='8' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='9' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='÷' clickHandler={this.handleClick} />
            </div>            
            <div>
                <Button name='4' clickHandler={this.handleClick} />
            <div>
            </div> 
                <Button name='5' clickHandler={this.handleClick} />
            <div>
            </div> 
                <Button name='6' clickHandler={this.handleClick} />
            <div>
            </div> 
                <Button name='x' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='1' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='2' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='3' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='+' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='0' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='.' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='=' clickHandler={this.handleClick} />
            </div>
            <div>
                <Button name='-' clickHandler={this.handleClick} />
            </div>
        </div>
        </div>
        );
    }
}

export default ButtonPanel;