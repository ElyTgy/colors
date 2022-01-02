import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import Navbar from './Navbar.js';
import {withStyles} from "@material-ui/styles"
import "./Palette.css" 


const styles = {
    palette:{
    height: "100vh",
    display:"flex",
    flexDirection: "column"
    },
    paletteColors:{
        height:"90%"
    },
    paletteFooter:{
        backgroundColor:'white',
        height:'5vh',
        display:'flex',
        justifyContent: 'flex-end',
        alignItems:'center',
        fontWeight:'bold'
    },
    emoji:{
        fontSize: "1.5rem",
        margin: "0 1rem"
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
        let colorBoxes = this.props.colors[this.state.level].map(colorobj=> <ColorBox color={colorobj[this.state.format]} name={colorobj.name} key={colorobj.id}/>)
        return (
            <div className={this.props.classes.palette}>
                <Navbar handleChange={this.handleChange} format={this.state.format} level={this.state.level} changeLevel={this.changeLevel}/>
                <div className={this.props.classes.paletteColors}>{colorBoxes}</div>
                <footer className={this.props.classes.paletteFooter}>
                    {this.props.paletteName}
                    <span className={this.props.classes.emoji}>{this.props.emoji}</span>
                </footer>
            </div>
        )
    }
}


export default withStyles(styles)(Palette)