import React, { Component } from 'react';
import Form from '../components/form/Form';

export default class Postman extends Component {
  state = {
    loading: false,
    result: '',
    url: '',
    history: []
  }

  handleChange = ({ target }) => {
    // will update url and method from radio button selection
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // make fetch to url, wait for result, and update result
    this.setState(state => ({

    }));
  }

  render() {
    const { url } = this.state;

    return (
      <>
        <Form url={url} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </>
    );
  }


}
