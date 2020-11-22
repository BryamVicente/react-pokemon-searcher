import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl:""
  }
  
  changeHandler = (e) => {
    // console.log("testin", e.target.value)
  this.setState({[e.target.name]: e.target.value})
  }

  localSubmitHandler = (e) => {
    e.preventDefault();
     console.log("submitting form...", e.target)
    this.props.submitHandler({name: e.target[0].value, hp:e.target[1].value, sprites: {front: e.target[2].value, back: e.target[3].value}})
    
    this.setState({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl:""
    }); 


  }

  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.localSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.changeHandler} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
