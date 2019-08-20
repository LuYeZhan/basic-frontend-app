import axios from 'axios';

class TalkService {
  constructor() {
    this.talk = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN + '/talk',
      withCredentials: true
    })
  };

  create(talk) {
    const { title, tags, soundURL, creator  } = talk;
    return this.talk.post('/create', { title, tags, soundURL, creator  })
      .then(({ data }) => data);
  };

  update(id,talk) {
    return this.talk.put(`/update/${id}`, talk)
    .then(response => response.data)
  };
  delete(id) {
    return this.talk.delete(`/delete/${id}`)
    .then(response => response.data)
  };
}

const talkService = new TalkService();

export default talkService;