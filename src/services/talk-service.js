import axios from 'axios';

class TalkService {
  constructor() {
    this.talk = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN + '/talk',
      // withCredentials: true, not needed for talks?
    })
  };

  create(talk) {
    const { title, audio, creator, talks } = talk;
    return this.talk.post('/create', { title, audio, creator, talks })
      .then(({ data }) => data);
  };

  update(talk) {
    return this.talk.put(`/update`, talk)
    .then(response => response.data)
  };
}

const talkService = new TalkService();

export default talkService;