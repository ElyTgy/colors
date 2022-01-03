import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette.js"

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
                <Route exact path="/" render={(routeProps)=><PaletteList palettes={seedColors} {...routeProps}/>}/>
                <Route exact path="/palette/:id" render={routeProps=><Palette {...generatePalette(this.findPalette(routeProps.match.params.id))}/>}/>
                <Route exact path="/palette/:paletteId/:colorId" render={routeProps=><SingleColorPalette 
                    {...generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                    colorId={routeProps.match.params.colorId}/>}
                />
            </Switch>
            
            //<div>
            //    <Palette {...generatePalette(seedColors[1])}/>
            //</div>
            
        )
    }
}
