import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import "./Palette.css"

export default class Palette extends Component {
    render() {
        let colorBoxes = this.props.colors.map(colorobj=> <ColorBox color={colorobj.color} name={colorobj.name}/>)
        return (
            <div className="palette">
                <div className="palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}
