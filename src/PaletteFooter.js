import React, { Component } from 'react'
import "./Palette.css"


function PaletteFooter(props)
{
    return(
        <footer className={"palette-footer"}>
            {props.paletteName}
            <span className={'emoji'}>{props.emoji}</span>
        </footer>)
}

export default PaletteFooter;
