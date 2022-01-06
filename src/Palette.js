import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import Navbar from './Navbar.js';
import {withStyles} from "@material-ui/styles"
import PaletteFooter from './PaletteFooter'
import "./Palette.css" 


const styles = {
    palette:{
    height: "100vh",
    display:"flex",
    flexDirection: "column"
    },
    paletteColors:{
        height:"90%"
    }
};

class Palette extends Component {
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
        console.log(this.props.id)
        const colorBoxes = this.props.colors[this.state.level].map(colorobj=> <ColorBox paletteId={this.props.id} colorId={colorobj.id} color={colorobj[this.state.format]} name={colorobj.name} key={colorobj.id} more={true}/>)
        return (
            <div className={this.props.classes.palette}>
                <Navbar handleChange={this.handleChange} format={this.state.format} level={this.state.level} changeLevel={this.changeLevel}/>
                <div className={this.props.classes.paletteColors}>{colorBoxes}</div>
                <PaletteFooter paletteName={this.props.paletteName} emoji={this.props.emoji}/>
            </div>
        )
    }
}


export default withStyles(styles)(Palette)