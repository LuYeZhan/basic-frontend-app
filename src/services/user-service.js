import axios from 'axios';

class UserService {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true
    })
  };
  getUser() {
    return this.user.get('/profile')
      .then(({ data }) => data);
  };
  getHome() {
    return this.user.get('/')
      .then(({data}) => data);
  }
  deleteTalk() {
    return this.user.post('/profile')
      .then(({data}) => data);
  }
}
const userService = new UserService();
export default userService;