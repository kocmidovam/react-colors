import React, {Component} from 'react'
import MiniPalette from './mini-palette'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/palette-list-styles'

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const {palettes, classes} = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              // <Link to={`/palette/${palette.id}`}>
                <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
              // </Link>
          ))}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList)