import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette.js"
import NewPaletteForm from './NewPaletteForm';

export default class App extends Component {
    constructor(props){
        super(props)
        this.findPalette = this.findPalette.bind(this);
        this.addPalette = this.addPalette.bind(this)
        this.state = {palettes : seedColors}
    }

    findPalette(id){
        console.log(this.state.palettes.find((palette)=>palette.id === id))
        return this.state.palettes.find((palette)=>palette.id === id)
    }

    addPalette(newPlatte){
        console.log(newPlatte)
        this.setState({palettes:[...this.state.palettes, newPlatte]})
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={(routeProps)=><PaletteList palettes={this.state.palettes} {...routeProps}/>}/>
                <Route exact path="/palette/new" render={(routeProps)=><NewPaletteForm paletteNames={this.state.palettes.map(palette=>palette.paletteName)} addPalette={this.addPalette} {...routeProps}/>}/>
                <Route exact path="/palette/:id" render={routeProps=><Palette {...generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
                <Route exact path="/palette/:paletteId/:colorId" render={routeProps=><SingleColorPalette 
                    {...generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                    colorId={routeProps.match.params.colorId}/>}
                />
            </Switch>            
        )
    }
}
