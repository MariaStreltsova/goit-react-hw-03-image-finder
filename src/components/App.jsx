import { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SearhBar from './searchBar/SearchBar';
import ImageGallery from './image-gallery/ImageGallery';
import LoadMoreButton from './button/Button';
import { AppContainer } from './App.styled';
import { Api } from '../components/service/ApiService';
import Spiner from './loader/Loader';
import Modal from './modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export default class App extends Component {
  static propTypes = { searchQuery: PropTypes.string };
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    selectedImage: null,
    alt: null,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const images = await Api.getImg(searchQuery, page);

        if (!images.length) {
          throw new Error();
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          status: 'resolved',
        }));
      } catch (error) {
        alert('error');
        this.setState({ status: 'rejected' });
      }
    }
  }
  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.resetState();
    this.setState({ searchQuery });
  };
  handleSelectedImage = (largeImageUrl, tags) => {
    this.setState({
      selectedImage: largeImageUrl,
      alt: tags,
    });
  };

  resetState = () => {
    this.setState({
      searchQuery: '',
      page: 1,
      images: [],
      selectedImage: null,
      alt: null,
      status: 'idle',
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  closeModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const { images, status, selectedImage, alt } = this.state;
    if (status === 'idle') {
      return <SearhBar onSubmit={this.handleFormSubmit} />;
    }
    if (status === 'pending') {
      return (
        <AppContainer>
          <SearhBar onSubmit={this.handleFormSubmit} />;
          <Spiner />
          {/* {images.length > 0 && <LoadMoreButton onClick={this.loadMore} />} */}
        </AppContainer>
      );
    }

    if (status === 'resolved') {
      return (
        <AppContainer>
          <SearhBar onSubmit={this.handleFormSubmit} />
          <ImageGallery
            images={this.state.images}
            selectedImage={this.handleSelectedImage}
          />
          {selectedImage && (
            <Modal
              selectedImage={selectedImage}
              tags={alt}
              onClose={this.closeModal}
            />
          )}
          {images.length > 0 && <LoadMoreButton onClick={this.loadMore} />}
        </AppContainer>
      );
    }

    if (status === 'rejected') {
      return (
        <AppContainer>
          <SearhBar onSubmit={this.handleFormSubmit} />;
        </AppContainer>
      );
    }
  }
}
