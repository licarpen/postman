import React, { Component } from 'react';
import Form from '../components/form/Form';

export default class Postman extends Component {
  state = {
    url: '',
    method: 'GET',
    result: '',
    loading: false,
    history: []
  }

  handleChange = ({ target }) => {
    // will update url and method from radio button selection
    this.setState({ [target.name]: target.value });
  }

  fetch = (url) => {
    this.setState({ loading: true });
    return fetch(url)
      .then(response => response.json());
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.state.url)
      .then(result => this.setState(state => ({ result: result, history: [...state.history, result], loading: false })));
  }

  render() {
    const { url, method } = this.state;

    return (
      <>
        <Form url={url} method={method} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </>
    );
  }


}
