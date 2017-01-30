import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const data = [
  { 
    id: 1,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg',
    name: 'Elephant',
    desc:  'Wiki snippet here',
    family: 'Animal Family: Elephantidae'
  },
  { 
    id: 2,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg',
    name: 'Elephant',
    desc:  'Wiki snippet here',
    family: 'Animal Family: Elephantidae'
  },
  { 
    id: 3,
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg',
    name: 'Elephant',
    desc:  'Wiki snippet here',
    family: 'Animal Family: Elephantidae'
  }
];

class CardGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: data
    }
  }

  test() {
    return this.state.animals.map( (animal) => {
      return (
        <Card key={ animal.id + animal.name }>
          <Card.Content>
            <Image floated="right" size="large" src={ animal.image }/>
            <Card.Header>
              { animal.name }
            </Card.Header>
            <Card.Meta>
              { animal.family }
            </Card.Meta>
            <Card.Description>
              { animal.desc }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>Make A Sound</Button>
            </div>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    const list = this.test();
    return (
      <Card.Group itemsPerRow={3}>
        { list }
      </Card.Group>
    )
  }
}

export default CardGrid;