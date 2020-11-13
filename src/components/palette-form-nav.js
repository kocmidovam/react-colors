import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import classNames from 'classnames'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {Button} from '@material-ui/core'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos'
import PaletteMetaForm from './palette-meta-form'
import styles from '../styles/palette-form-nav-styles'

class PaletteFormNav extends Component {
	state = {
		formShowing: false,
	}

	showForm = () => {
		this.setState({
			formShowing: true,
		})
	}

	hideForm = () => {
		this.setState({
			formShowing: false,
		})
	}

	render() {
		const {
			classes,
			open,
			palettes,
			handleSubmit,
			handleDrawerOpen,
		} = this.props
		const {formShowing} = this.state
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					color='default'
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={handleDrawerOpen}
							className={classNames(
								classes.menuButton,
								open && classes.hide
							)}
						>
							<AddToPhotosIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<Button
							className={classes.button}
							variant='contained'
							color='primary'
							onClick={this.showForm}
						>
							Save
						</Button>
						<Link to='/'>
							<Button
								className={classes.button}
								variant='contained'
								color='secondary'
							>
								Go Back
							</Button>
						</Link>
					</div>
				</AppBar>
				{formShowing && (
					<PaletteMetaForm
						palettes={palettes}
						handleSubmit={handleSubmit}
						hideForm={this.hideForm}
					/>
				)}
			</div>
		)
	}
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav)
