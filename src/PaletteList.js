import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class PaletteList extends Component {
    render() {
        let palettes = this.props.palettes.map(palette => 
        <Link to={`palette/${palette.id}`}>
            <div className="link-content">
                <span className="name">{palette.paletteName}</span>
                <span className="emoji">{palette.emoji}</span>
            </div>
        </Link>)
        return (
            <div>
                {palettes}
            </div>
        )
    }
}
