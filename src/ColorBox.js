import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js';
import "./ColorBox.css"

export default class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {copied:false}
    }

    changeCopyState(){
        this.setState({copied: true}, ()=>{
            setTimeout(()=>this.setState({copied:false}), 1500);
        })
    }

    render() {
        const {name, color} = this.props;
        const isDarkColor = chroma(color).luminance() <= 0.1;
        const isLightColor = chroma(color).luminance() >= 0.65;
        return (
            <CopyToClipboard onCopy={this.changeCopyState.bind(this)} text={color}>
                <div key={color} className="color-box" style={{background: color}}>
                    <div style={{background: color}} className={`copy-overlay ${this.state.copied && 'show'}`}/>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p className={isDarkColor && "light-text"}>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && "light-text"}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor && "dark-text"}`}>{color}</button>
                    </div>
                    {this.props.more && (<Link onClick={e=>e.stopPropagation()} to={`/palette/${this.props.paletteId}/${this.props.colorId}`}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>more</span>
                    </Link>)}
                </div>  
            </CopyToClipboard>
        )
    }
}
