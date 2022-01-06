import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button, Typography } from '@material-ui/core';
import { ChromePicker } from 'react-color';
import { ThemeProvider } from '@material-ui/styles';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Redirect } from 'react-router-dom';


const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height:"calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});


class NewPaletteForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            open:true,
            currentColor:"purple",
            newName: "",
            colors: [],
            newPaletteName:""
        }
        this.updateColor = this.updateColor.bind(this)
        this.addNewColor = this.addNewColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.savePalette = this.savePalette.bind(this)
    }

    savePalette(){
        let paletteName = this.state.newPaletteName;
        const palette = {
            paletteName:paletteName,
            id:paletteName.toLowerCase().replace(/ /g, "-"),
            emoji: "",
            colors:this.state.colors
        }
        this.props.addPalette(palette)
        this.props.history.push("/");
    }

    componentDidMount(){
        //hasColors
        ValidatorForm.addValidationRule("isUnique", value =>{
            for(let color of this.state.colors){
                if(color.name.toLowerCase() === value.toLowerCase()){return false;}
            }
            return true;
        })

        ValidatorForm.addValidationRule("hasColors", value =>{
            if(this.state.colors.length === 0){return false}
            return true;
        })
    }

    updateColor(newColor){
        this.setState({currentColor:newColor.hex})
    }

    addNewColor(){
        const colorObj = {
            name: this.state.newName,
            color: this.state.currentColor
        }
        this.setState({colors: [...this.state.colors, colorObj], newName:""})
    }

    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }

    state = {
        open: false,
      };
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    
      render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
    
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              color="default"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Persistent drawer
                </Typography>
                <ValidatorForm onSubmit={this.savePalette}>
                    <TextValidator 
                        label="palette name" 
                        value={this.state.newPaletteName} 
                        onChange={this.handleChange}
                        name="newPaletteName"
                        validators={['required', 'hasColors']}
                        errorMessages={['palette name is required', 'add at least one color to the palette']}
                    />
                    <Button 
                        variant='contained' 
                        color="primary"
                        type="submit">
                    SAVE PALETTE</Button>
                </ValidatorForm>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <Typography variant="h4">design your palette</Typography>
              <div>
                <Button variant="contained" color="secondary">clear palette</Button>
                <Button variant="contained" color="primary">random color</Button>
              </div>
              <ChromePicker color={this.state.currentColor} onChangeComplete={this.updateColor}/>
              <ValidatorForm onSubmit={this.addNewColor}>
                  <TextValidator 
                    name="newName"
                    value={this.state.newName} 
                    onChange={this.handleChange} 
                    validators={["required", "isUnique"]}
                    errorMessages={["this field is requied", "name must be unique"]}
                  />
                  <Button 
                          variant="contained" 
                          color="primary" 
                          style={{backgroundColor:this.state.currentColor}}
                          type="submit"
                      >
                      add color
                  </Button>
              </ValidatorForm>
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
            <div className={classes.drawerHeader} />
            {this.state.colors.map(color=><DraggableColorBox color={color.color} name={color.name}/>)}
            </main>
          </div>
        );
      }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
