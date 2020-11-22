import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    api: [],
    searchValue: ""
  }
  
  componentDidMount = () =>  {
    fetch("http://localhost:3000/pokemon")
    .then(resp=>resp.json())
    .then(data => this.setState({api: data}))
  }

  searchHandler = (e) => {
    this.setState({searchValue: e.target.value})
  }
  
  submitHandler = (pokemon) => {
    console.log("submitting", pokemon)
    // this.setState({api: [...this.state.api, pokemon]})
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: pokemon.name,
        hp: pokemon.hp,
        sprites: {
          front: pokemon.sprites.front,
          back: pokemon.sprites.back
        }
      })
    })
    .then(resp=>resp.json())
    .then(newObj => this.setState({api: [...this.state.api, newObj]}))

  }

  

  render() {
    console.log(this.state.api)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler ={this.submitHandler}/>
        <br />
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
        <br />
        <PokemonCollection searchValue={this.state.searchValue} api={this.state.api} />
      </Container>
    )
  }
}

export default PokemonPage
