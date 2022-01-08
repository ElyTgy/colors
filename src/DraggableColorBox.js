import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import DeleteIcon from "@material-ui/icons/Delete"

const styles = {
    root:{
        width:"20%",
        height:"25%",
        display: "inline-block",
        margin:"0 auto",
        position: "relative",
        cursor: "pointer",
        verticalAlign: "top",
        fontSize: "0.85rem",
        "&:hover svg":{
            color:"white",
            transform: "scale(1.3)"
        }
    },
    boxContent:{
        position:"absolute",
        width:"100%",
        padding:"5px",
        left:"0px",
        bottom:"0px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        color:"black",
        fontSize:"12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon:{
        color:"black",
        transition: "all 0.2s ease-in-out"
    }
}

function DraggableColorBox(props){
    return (
        <div className={props.classes.root} style={{backgroundColor: props.color}}>
            <div className={props.classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={props.classes.deleteIcon}/>
            </div>
        </div>
    )    
}

export default withStyles(styles)(DraggableColorBox)
