import React, { Component } from 'react';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import Result from '../components/result/Result';
import HistoryList from '../components/history/HistoryList';
import { fetchWithError } from '../services/fetchWithError';
import styles from './Postman.css';

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

  handleSubmit = event => {
    event.preventDefault();
    return fetchWithError(this.state.url, this.state.method, this.state.body, bodyMethods)
      .then(result => this.setState(state => ({ result: JSON.stringify(result, null, 2), history: [...state.history, { method: state.method, url: state.url, body: state.body }] })))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  render() {
    const { url, method, body, result, history } = this.state;

    return (
      <>
        <Header/>
        <div className={styles.Postman}>
          <Form url={url} method={method} body={body} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          <Result result={result} />
          <HistoryList history={history} onClick={this.handleClick}/>
        </div>
      </>
    );
  }
}
