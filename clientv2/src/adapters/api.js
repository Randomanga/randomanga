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

export { createRandomList, toggleLikeManga };
