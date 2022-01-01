import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import "./ColorBox.css"

export default class ColorBox extends Component {
    render() {
        const {name, color} = this.props;
        return (
            <CopyToClipboard text={color}>
                <div key={color} className="color-box" style={{background: color}}>
                    <div className="copy-container">
                        <div className="box-content">{name}</div>
                        <button className="copy-button">copy</button>
                    </div>
                    <span className="see-more">more</span>
                </div>  
            </CopyToClipboard>
        )
    }
}
