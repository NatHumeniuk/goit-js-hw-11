import axios from 'axios';

export class PhotoApi {
  static #KEY = '40580814-1f1887412e50f82259cec363c';
  static #PER_PAGE = 40;
  static #BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.q = '';
    this.page = 1;
    this.type = 'photo';
    this.orientation = 'horizontal';
    this.safesearch = 'true';
  }
  async getPhotos() {
    axios.defaults.baseURL = PhotoApi.#BASE_URL;
    const config = {
      method: 'get',
      params: {
        key: PhotoApi.#KEY,
        q: this.q,
        image_type: this.type,
        orientation: this.orientation,
        safesearch: this.safesearch,
        per_page: PhotoApi.#PER_PAGE,
        page: this.page,
      },
    };
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
