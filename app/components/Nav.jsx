var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
           React Stopwatch App
          </li>
          <li>
          <IndexLink to="/" activeClassName="active-link"
              activeStyle="{{fontWeight: 'bold'}}">Timer
          </IndexLink>
          </li>
          <li>
            <Link to="/" activeClassName="active-link" activeStyle={{fontWeight:'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text"> Made by <a href="http://andyhunt.net/" target="_blank">Andy Hunt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};  

module.exports = Nav;