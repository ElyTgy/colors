import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'
import {withStyles} from "@material-ui/styles"

const styles = {
    root: {
        backgroundColor: "black",
        height: "100vh",
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
        gridGap: "5%",
        textDecoration:"none"
    }
}


class PaletteList extends Component {
    handleClick(id){
        this.props.history.push(`/palette/${id}`);
    }
    
    render() {
        let palettes = this.props.palettes.map(palette =>
            <MiniPalette {...palette} handleClick={() => this.handleClick(palette.id)}/>)
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