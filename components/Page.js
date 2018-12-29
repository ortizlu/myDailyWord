import React, { Component } from 'react';
import Meta from '../components/Meta';
import Header from './Header';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Page;
