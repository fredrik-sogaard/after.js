// import tachyons from 'tachyons'
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './react.svg';
import './Home.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class Home extends React.Component {
  static async getInitialProps() {
    return sleep(5000).then(() => ({ stuff: 'hello' }));
  }

  render() {
    console.log('Home render');
    return (
      <div className="page">
        <img className="logo" src={logo} alt="After.js Logo" />
        <NavLink to="/">Home (5 sec getInitialProps timeout)</NavLink>
        <NavLink to="/about">About (1 sec getInitialProps timeout)</NavLink>
        <h1>Home (pre-Razzle)</h1>
        <p>Click the button to prefetch data for the About page</p>
        <button onClick={() => this.props.prefetch('/about')}>
          Prefetch Data!
        </button>

        <pre>data: {this.props.stuff ? this.props.stuff : 'Loading...'}</pre>
      </div>
    );
  }
}

export default Home;
