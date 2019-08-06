import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  bindInput = e => this.setState({ [e.target.name]: e.target.value });

  searchUsers = e => {
    e.preventDefault();
    const { text } = this.state;

    if (text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.searchUsers} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.bindInput}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-ligt btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
