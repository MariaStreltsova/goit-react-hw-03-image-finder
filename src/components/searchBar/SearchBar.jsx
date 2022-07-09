import { Component } from 'react';
export default class SearhBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      alert('введите поиск');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="serchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
