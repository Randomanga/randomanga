import axios from 'axios';
async function createRandomList(filters) {
  const list = await axios.post(
    'http://192.168.1.242:5000/api/random-lists',
    filters
  );
  return list.data._id;
}

export { createRandomList };
