import React, { Component } from 'react';
import wikiActions from '../actions/wikipedia.js';
import { Button, Form, Input } from 'semantic-ui-react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }
  state = { formData: {} }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData })
    wikiActions.wikiApiCall(formData.search);
  }

  render() {
    const { formData, value } = this.state
    return (
      <Form onSubmit={this.handleSubmit} size='huge'>
          <Form.Input 
            name='search' 
            placeholder='Type an animal name here. Then, press Enter or hit the Go! button.'
            action='Go!'
             />
      </Form>
    )
  }
}

export default SearchBar;