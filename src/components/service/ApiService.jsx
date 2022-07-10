import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '27511871-af3c65d931511896211490940';

export class Api {
  static async getImg(searchQuery, page) {
    const response = `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const { data } = await axios.get(response);
    return data.hits;
  }
}
