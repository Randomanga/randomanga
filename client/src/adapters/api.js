import axios from 'axios';
async function createRandomList(filters) {
  const list = await axios.post(
    'http://192.168.1.242:5000/api/random-lists',
    filters
  );
  return list.data._id;
}

async function toggleLikeManga(id, flag) {
  return axios({
    method: flag ? 'delete' : 'post',
    url: `http://192.168.1.242:5000/api/manga/${id}/likes`,
    withCredentials: true,
  });
}
async function login(data) {
  return axios.post('http://192.168.1.242:5000/api/auth/login', data);
}
async function signup(data) {
  return axios.post('http://192.168.1.242:5000/api/auth/register', data);
}

async function authStatus() {
  return axios.get('http://192.168.1.242:5000/api/auth/status', {
    withCredentials: true,
  });
}
async function logout() {
  return axios.delete('http://192.168.1.242:5000/api/auth/logout', {
    withCredentials: true,
  });
}
async function getRandomListInfo(id) {
  return axios.get(`http://192.168.1.242:5000/api/random-lists/${id}/info`);
}

export {
  createRandomList,
  toggleLikeManga,
  login,
  authStatus,
  getRandomListInfo,
};
