import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

clickPicture = () => {
  this.setState((oldState)=> {
    return {clicked: !oldState.clicked}
  })
}

  render() {
    let pokemon = this.props 
    return (
      <Card>
        <div>
          <div onClick={this.clickPicture} className="image">
            <img alt="oh no!" src = {this.state.clicked ? pokemon.pokemon.sprites.back : pokemon.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{pokemon.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
