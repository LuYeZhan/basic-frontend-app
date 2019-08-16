import axios from 'axios';

class UserService {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      // withCredentials: true, not needed for talks?
    })
  };

  getUser() {
    return this.user.get('/profile')
      .then(({ data }) => data);
  };
  getHome() {
    return this.talk.get('/home')
      .then(({data}) => data);
  }
  
  }

const userService = new UserService();

export default userService;