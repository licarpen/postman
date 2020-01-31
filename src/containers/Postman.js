import React, { Component } from 'react';
import Form from '../components/form/Form';
import Result from '../components/result/Result';
import HistoryList from '../components/history/HistoryList';

const bodyMethods = ['POST', 'PUT', 'PATCH'];

export default class Postman extends Component {
  state = {
    url: '',
    method: 'GET',
    result: '',
    body: '',
    history: []
  }

  handleChange = ({ target }) => {
    // will update url and method from radio button selection
    this.setState({ [target.name]: target.value });
  }

  handleClick = (method, url) => {
    this.setState({ method, url });

  }

  fetchRequest = () => {
    return fetch(this.state.url, { 
      method: this.state.method, 
      headers: bodyMethods.includes(this.state.method) ? { 'Content-Type': 'application/json' } : {},
      body: bodyMethods.includes(this.state.method) ? this.state.body : null
    })
      .then(response => response.json());
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchRequest()
      .then(result => this.setState(state => ({ result: JSON.stringify(result, null, 2), history: [...state.history, { method: state.method, url: state.url, body: state.body }] })));
  }

  render() {
    const { url, method, body, result, history } = this.state;

    return (
      <>
        <Form url={url} method={method} body={body} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Result result={result} />
        <HistoryList history={history} onClick={this.handleClick}/>
      </>
    );
  }
}
