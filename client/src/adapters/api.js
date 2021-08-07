import axios from 'axios';
import request from 'graphql-request';
async function createRandomList(filters) {
  const list = await axios.post(
    'http://192.168.178.63:5000/api/random-lists',
    filters
  );
  return list.data._id;
}
async function getDailyManga() {
  const res = await axios.get('http://192.168.178.63:5000/api/manga/daily', {
    withCredentials: true,
  });
  return res.data;
}
async function toggleLikeManga(id, flag) {
  return axios({
    method: flag ? 'delete' : 'post',
    url: `http://192.168.178.63:5000/api/manga/${id}/likes`,
    withCredentials: true,
  });
}
async function login(data) {
  return axios.post('http://192.168.178.63:5000/api/auth/login', data, {
    withCredentials: true,
  });
}
async function signup(data) {
  return axios.post('http://192.168.178.63:5000/api/auth/register', data, {
    withCredentials: true,
  });
}

async function authStatus() {
  return axios.get('http://192.168.178.63:5000/api/auth/status', {
    withCredentials: true,
  });
}
async function logout() {
  return axios.delete('http://192.168.178.63:5000/api/auth/logout', {
    withCredentials: true,
  });
}
async function getRandomListInfo(id) {
  return axios.get(`http://192.168.178.63:5000/api/random-lists/${id}/info`);
}
async function getAlIdentity() {
  return axios.get('http://192.168.178.63:5000/api/oauth/identity', {
    withCredentials: true,
  });
}
async function getTokens() {
  return axios.get('http://192.168.178.63:5000/api/users/token', {
    withCredentials: true,
  });
}
async function getProfile(id) {
  return axios.get(`http://192.168.178.63:5000/api/users/${id}`);
}
async function removeAlAuth(id) {
  return axios.delete(`http://192.168.178.63:5000/api/users/${id}/alAuth`);
}
async function addToPlanning(id) {
  return request(
    'https://graphql.anilist.co/',
    `
  mutation ($mediaId: Int, $status: MediaListStatus) {
    SaveMediaListEntry(mediaId: $mediaId, status: $status) {
      mediaId
      status
      id
    }
  }
  `,
    {
      mediaId: id,
      status: 'PLANNING',
    },
    {
      Authorization: `Bearer ${localStorage.getItem('alToken')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
}
async function removeFromPlanning(id) {
  console.log(id);
  return request(
    'https://graphql.anilist.co/',
    `
    mutation($id: Int){
      DeleteMediaListEntry(id: $id){
        deleted
      }
    }
    `,
    {
      id,
    },
    {
      Authorization: `Bearer ${localStorage.getItem('alToken')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
}
async function alSearch(query) {
  const alToken = localStorage.getItem('alToken');
  return request(
    'https://graphql.anilist.co/',
    `
    query($query: String!) {
      Page{
        media(search: $query,type: MANGA, format: MANGA, isAdult: false) {
          id
          title {
            romaji
          }
          bannerImage
          coverImage {
            large 
            extraLarge
            medium
            color
          }
          mediaListEntry {
            id
            status
          }
        }
      }
    }
    `,
    {
      query,
    },
    {
      ...(alToken ? { Authorization: `Bearer ${alToken}` } : {}),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
}
async function fetchSections() {
  return request(
    'https://graphql.anilist.co/',
    `
    query ($page: Int) {
      trending:Page(page: $page,perPage: 5) {
        media(isAdult: false, sort: [TRENDING_DESC],type: MANGA) {
          id
          title {
            romaji
            userPreferred
          }
          bannerImage
          coverImage {
            extraLarge
            large
            medium
          }
        }
        pageInfo {
          hasNextPage
          total
        }
      }
      popular:Page(page: $page,perPage: 5) {
        media(isAdult: false, sort: [POPULARITY_DESC],type: MANGA) {
          id
          title {
            romaji
            userPreferred
          }
          bannerImage
          coverImage {
            extraLarge
            large
            medium
          }
        }
        pageInfo {
          hasNextPage
          total
        }
      }
    }
    `
  );
}
async function fetchTrending(page = 1) {
  return request(
    'https://graphql.anilist.co/',
    `
    query ($page: Int) {
      Page(page: $page,perPage: 5) {
        media(isAdult: false, sort: [TRENDING_DESC],type: MANGA) {
          id
          title {
            romaji
            userPreferred
          }
          bannerImage
          coverImage {
            extraLarge
            large
            medium
          }
        }
        pageInfo {
          hasNextPage
          total
        }
      }
    }
      `,
    {
      page,
    },
    {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
}
async function fetchPopular(page = 1) {
  return request(
    'https://graphql.anilist.co/',
    `
    query ($page: Int) {
      Page(page: $page,perPage: 5) {
        media(isAdult: false, sort: [POPULARITY_DESC],type: MANGA) {
          id
          title {
            romaji
            userPreferred
          }
          bannerImage
          coverImage {
            large
            medium
            color
          }
        }
        pageInfo {
          hasNextPage
          total
        }
      }
    }
      `,
    {
      page,
    },
    {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
}
export {
  createRandomList,
  toggleLikeManga,
  fetchTrending,
  fetchPopular,
  removeFromPlanning,
  login,
  removeAlAuth,
  addToPlanning,
  alSearch,
  fetchSections,
  signup,
  authStatus,
  getProfile,
  getRandomListInfo,
  logout,
  getDailyManga,
  getAlIdentity,
  getTokens,
};
