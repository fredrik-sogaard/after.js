import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './react.svg';

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class About extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const json = await res.json();
    return { stars: json.stargazers_count };
    //return sleep(1000).then(() => ({ stuff: 'about' }))
  }

  render() {
    console.log('About render');
    return (
      <div className="page">
        <img className="logo" src={logo} alt="After.js Logo" />
        <NavLink to="/">Home (5 sec getInitialProps timeout)</NavLink>
        <NavLink to="/about">About (1 sec getInitialProps timeout)</NavLink>
        <h1>About (pre-Razzle)</h1>
        <button onClick={() => this.props.prefetch('/')}>Prefetch Data!</button>
        <pre>data: {this.props.stars ? this.props.stars : 'Loading...'}</pre>
      </div>
    );
  }
}

export default About;
