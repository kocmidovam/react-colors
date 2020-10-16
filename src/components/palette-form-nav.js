import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import {Link} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import PaletteMetaForm from './palette-meta-form'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

const drawerWidth = 350;

const styles = theme => ( {
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
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
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    }
  },
  button: {
    margin: '0 0.5rem',
  },
})

class PaletteFormNav extends Component {
 state = {
  formShowing: false,
 }
 showForm = () => {
   this.setState({
     formShowing: true,
   })
 }

  render() {
    const {classes, open, palettes, handleSubmit} = this.props
    return(
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Create New Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
            <Button
              className={classes.button} 
              variant="contained" 
              color="primary" 
              onClick={this.showForm}
            >
              Save
            </Button>
            <Link to='/'>
              <Button 
                className={classes.button}
                variant='contained' 
                color='secondary'>
                  Go Back
              </Button>
            </Link>
          </div>
      </AppBar>
      {this.state.formShowing && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} />}
    </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav)