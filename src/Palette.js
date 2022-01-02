import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import Navbar from './Navbar.js';
import "./Palette.css"


export default class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {level:500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    render() {
        let colorBoxes = this.props.colors[this.state.level].map(colorobj=> <ColorBox color={colorobj.hex} name={colorobj.name}/>)
        return (
            <div className="palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel}/>
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}
