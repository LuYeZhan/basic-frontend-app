import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  signup(user) {
    const { username, password, email } = user;
    return this.auth.post('/auth/signup', {username, password, email})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }
// si hay current user, devuelvemelo. Es decir para guardar el user, aunque hagamos refresh en la pagina
  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const authService = new AuthService();

export default authService;