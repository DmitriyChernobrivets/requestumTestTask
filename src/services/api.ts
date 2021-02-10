import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { URLS } from '../types/enums';
class Api {
   private instance: AxiosInstance;

   constructor() {
      this.instance = axios.create({
         baseURL: URLS.BASE_URL,
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/vnd.github.mercy-preview+json',
         },
      });
   }

   getUsers = (query: string): Promise<AxiosResponse> =>
      this.instance.get('/search/repositories', {
         params: {
            q: `${query} in:name,description`,
            per_page: 20,
            page: 1,
         },
      });
}
const api = new Api();
export default api;
