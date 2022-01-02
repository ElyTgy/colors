import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'
import {withStyles} from "@material-ui/styles"

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width:"65%",
        display:"flex",
        alignItems:"flex-start",
        flexDirextion: "column",
        flexWrap:"wrap"
    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color: "white"
    },
    palettes: {
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3, 30%)",
        gridGap: "5%"
    }
}


class PaletteList extends Component {
    render() {
        //let palettes = this.props.palettes.map(palette => 
        //<Link to={`palette/${palette.id}`}>
        //    <div className="link-content">
        //        <span className="name">{palette.paletteName}</span>
        //        <span className="emoji">{palette.emoji}</span>
        //    </div>
        //</Link>)
        let palettes = this.props.palettes.map(palette =>
            <MiniPalette {...palette}/>)
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.container}>
                    <nav className={this.props.classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={this.props.classes.palettes}>
                        {palettes}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)