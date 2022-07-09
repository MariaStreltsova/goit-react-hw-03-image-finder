import { Component } from 'react';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from './SerchBar.styled';
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
      <SearchBar>
        <SerchForm onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="serchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit">
            <SerchFormBtnLabel>Search</SerchFormBtnLabel>
          </SearchBtn>
        </SerchForm>
      </SearchBar>
    );
  }
}
