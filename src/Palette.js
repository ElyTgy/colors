import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import Navbar from './Navbar.js';
import "./Palette.css"


export default class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {level:500, format:"hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    handleChange(format){
        this.setState({format:format});
    }

    render() {
        let colorBoxes = this.props.colors[this.state.level].map(colorobj=> <ColorBox color={colorobj[this.state.format]} name={colorobj.name}/>)
        return (
            <div className="palette">
                <Navbar handleChange={this.handleChange} format={this.state.format} level={this.state.level} changeLevel={this.changeLevel}/>
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}
