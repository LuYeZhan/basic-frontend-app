import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN + '/auth',
      withCredentials: true,
    })
  };

  signup(user) {
    const { username, password, email } = user;
    return this.auth.post('/signup', {username, password, email})
      .then(({ data }) => data);
  };

  login(user) {
    const { username, password } = user;
    return this.auth.post('/login', {username, password})
      .then(({ data }) => data);
  };

  logout() {
    return this.auth.post('/logout')
      .then(response => response.data)
  };
// si hay current user, devuelvemelo. Es decir para guardar el user, aunque hagamos refresh en la pagina
  me() {
    return this.auth.get('/me')
    .then(response => response.data)
  };
  update(id, user) {
    console.log('algo')
    return this.auth.put(`/profile/update`, user)
    .then(response => response.data)
  };
}

const authService = new AuthService();

export default authService;