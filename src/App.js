import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from "./PaletteList";

export default class App extends Component {
    constructor(props){
        super(props)
        this.findPalette = this.findPalette.bind(this);
    }
    findPalette(id){
        console.log(seedColors.find((palette)=>palette.id === id))
        return seedColors.find((palette)=>palette.id === id)
    }

    render() {
        //console.log(generatePalette(seedColors[0]));
        return (
            <Switch>
                <Route exact path="/" render={()=><PaletteList palettes={seedColors}/>}/>
                <Route exact path="/palette/:id" render={routeProps=><Palette {...generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
            </Switch>
            
            //<div>
            //    <Palette {...generatePalette(seedColors[1])}/>
            //</div>
            
        )
    }
}
