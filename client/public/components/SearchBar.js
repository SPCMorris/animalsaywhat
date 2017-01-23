import React, { Component } from 'react';
import { Button, Form, Input } from 'semantic-ui-react'

class SearchBar extends Component {
  state = { formData: {} }

  handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    this.setState({ formData })
    console.log(formData.search)
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