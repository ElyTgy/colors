import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import "./Palette.css"
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                <Slider step={100} min={100} max={900} onAfterChange={this.changeLevel}/>
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}
