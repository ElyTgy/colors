import React, { Component } from 'react'
import Palette from './Palette'
import seedColors from './seedColors'
import {generatePalette} from "./colorHelpers";

export default class App extends Component {
    render() {
        console.log(generatePalette(seedColors[0]));
        return (
            <div>
                <Palette {...generatePalette(seedColors[1])}/>
            </div>
        )
    }
}
