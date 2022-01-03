import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
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
        return (
            <CopyToClipboard onCopy={this.changeCopyState.bind(this)} text={color}>
                <div key={color} className="color-box" style={{background: color}}>
                    <div style={{background: color}} className={`copy-overlay ${this.state.copied && 'show'}`}/>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">{name}</div>
                        <button className="copy-button">{color}</button>
                    </div>
                    {this.props.more && (<Link onClick={e=>e.stopPropagation()} to={`/palette/${this.props.paletteId}/${this.props.colorId}`}>
                        <span className="see-more">more</span>
                    </Link>)}
                </div>  
            </CopyToClipboard>
        )
    }
}
