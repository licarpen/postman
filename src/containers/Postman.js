import React, { Component } from 'react';
import Form from '../components/form/Form';
import Result from '../components/result/Result';
import HistoryList from '../components/history/HistoryList';

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

  fetchPost = () => {
    return fetch(this.state.url)
      .then(response => response.json());
  }

  fetchWithBody = () => {
    return fetch(this.state.url, { 
      method: this.state.method, 
      headers: { 'Content-Type': 'application/json' },
      body: this.state.body 
    })
      .then(response => response.json());
  }

  handleSubmit = event => {
    event.preventDefault();

    if(this.state.method === 'GET'){
      this.fetchPost()
        .then(result => this.setState(state => ({ result: JSON.stringify(result, null, 2), history: [...state.history, { method: state.method, url: state.url }] })));
    }

    else {
      this.fetchWithBody()
        .then(result => this.setState(state => ({ result: JSON.stringify(result, null, 2), history: [...state.history, { method: state.method, url: state.url }] })));
    }
  }

  render() {
    const { url, method, body, result, history } = this.state;

    return (
      <>
        <Form url={url} method={method} body={body} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Result result={result} />
        <HistoryList history={history} />
      </>
    );
  }
}
