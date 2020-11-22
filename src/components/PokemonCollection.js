import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  filteredPokemon = () => {
    return this.props.api.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.searchValue.toLowerCase()))
  }

  renderPokemon = () => {
    return this.filteredPokemon().map(pokeObj => <PokemonCard pokemon={pokeObj} key={pokeObj.id}/>) 
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}



export default PokemonCollection
