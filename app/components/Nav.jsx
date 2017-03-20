var React = require('react');
var {Link, IndexLink} = require('react-router');

// Stateless functional component
var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active">Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <p className="menu-text">Create by Nemanja Stojković</p>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
