import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from '../components/Pet/Pet';
import petsData from '../assets/pets.json';

export default class PetPage extends Component {
  state = { pet: null };

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;

    this.setState({ pet: petsData.find(pet => pet.id === id) });
  }

  handleReturn = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/pets');
  };

  render() {
    const { pet } = this.state;
    return (
      <div>{pet && <Pet pet={pet} handleReturn={this.handleReturn} />}</div>
    );
  }
}

PetPage.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
