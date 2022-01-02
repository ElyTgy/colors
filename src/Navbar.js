import React, {Component} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {format:this.props.format};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({format:e.target.value})
        this.props.handleChange(e.target.value);
    }

    render(){
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="#">color picker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="slider">
                        <Slider defaultValue={this.props.level} step={100} min={100} max={900} onAfterChange={this.props.changeLevel}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar;