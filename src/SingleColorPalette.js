import React, { Component } from 'react'
import ColorBox from "./ColorBox.js"
import Navbar from './Navbar.js';
import "./Palette.css" 
import PaletteFooter from "./PaletteFooter"

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.shades = this.gatherShades(this.props.colorId)
        this.state = {format:"hex"};
        this.handleChange = this.handleChange.bind(this)
    }

    gatherShades(colorName){
        let shades = []
        for(let key in this.props.colors){
            shades = shades.concat(
                this.props.colors[key].filter(color => color.id === colorName)
            )
        }

        return shades.slice(1)
    }

    handleChange(format){
        this.setState({format:format});
    }

    render() {
        const colorBoxes = this.shades.map(colorobj=> 
            <ColorBox 
                paletteId={this.props.id}  
                colorId={colorobj.id} 
                color={colorobj[this.state.format]} 
                name={colorobj.name}
                more={false}
            />)
        return (
            <div className="palette">
                <Navbar handleChange={this.handleChange} format={this.state.format} />
                <h1>{this.props.paletteName}</h1>
                <div className="palette-colors">
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={this.props.paletteName} emoji={this.props.emoji}/>
            </div>
        )
    }
}
