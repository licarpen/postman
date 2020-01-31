import React, { Component } from 'react';
import Form from '../components/form/Form';
import Result from '../components/result/Result';
import HistoryList from '../components/history/HistoryList';

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
    // this.setState({ loading: true });
    return fetch(url)
      .then(response => response.json());
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetch(this.state.url)
      .then(result => this.setState(state => ({ result: JSON.stringify(result, null, 2), history: [...state.history, { method: state.method, url: state.url }], loading: false })));
  }

  render() {
    const { url, method, result, history } = this.state;

    return (
      <>
        <Form url={url} method={method} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Result result={result} />
        <HistoryList history={history} />
      </>
    );
  }
}
