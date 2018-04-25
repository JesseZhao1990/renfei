import { post, get } from '../tools/network';

export default {
  verify(param) {
    return post('/api/card/verify', param);
  },
  cardInfo(id) {
    return get(`/api/card/${id}`);
  },
  fillInfo(param) {
    return post('/api/fill_info', param);
  },
};
