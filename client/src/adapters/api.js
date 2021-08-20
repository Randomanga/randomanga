import axios from 'axios';
import request from 'graphql-request';
async function createRandomList(filters) {
  const list = await axios.post('https://randomanga.net/api/random-lists', filters);
  return list.data._id;
}
async function getDailyManga() {
  const res = await axios.get('https://randomanga.net/api/manga/daily', {
    withCredentials: true,
  });
  const { al_id } = res.data.manga;
  if (localStorage.getItem('alToken')) {
    const status = await request(
      'https://graphql.anilist.co/',
      `
    query($id: Int){
      Media(id: $id,type: MANGA){
        id
        mediaListEntry{
          id,
          status
        }
      }
    }
    `,
      {
        id: al_id,
      },
      {
        Authorization: `Bearer ${localStorage.getItem('alToken')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    );
    return {
      manga: { ...res.data.manga, mediaListEntry: status.Media.mediaListEntry },
    };
  }
  return res.data;
}
async function toggleLikeManga(id, flag) {
  return axios({
    method: flag ? 'delete' : 'post',
    url: `/api/manga/${id}/likes`,
    withCredentials: true,
  });
}
async function login(data) {
  return axios.post('https://randomanga.net/api/auth/login', data, {
    withCredentials: true,
  });
}
async function signup(data) {
  return axios.post('https://randomanga.net/api/auth/register', data, {
    withCredentials: true,
  });
}

async function authStatus() {
  return axios.get('https://randomanga.net/api/auth/status', {
    withCredentials: true,
  });
}
async function logout() {
  return axios.delete('https://randomanga.net/api/auth/logout', {
    withCredentials: true,
  });
}
async function getRandomListInfo(id) {
  return axios.get(`/api/random-lists/${id}/info`);
}
async function getAlIdentity() {
  return axios.get('https://randomanga.net/api/oauth/identity', {
    withCredentials: true,
  });
}
async function getTokens() {
  return axios.get('https://randomanga.net/api/users/token', {
    withCredentials: true,
  });
}
async function getProfile(id) {
  return axios.get(`/api/users/${id}`);
}
async function removeAlAuth(id) {
  return axios.delete(`/api/users/${id}/alAuth`);
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
async function getUserAlId() {
  const alToken = localStorage.getItem('alToken');
  const data = await request(
    'https://graphql.anilist.co/',
    `
    query {
      Viewer{
        id
      }
    }
    `,
    {},
    {
      Authorization: `Bearer ${alToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
  return data.Viewer.id;
}
async function getUserMangaList(userId, page = 1) {
  const alToken = localStorage.getItem('alToken');
  const response = await request(
    'https://graphql.anilist.co/',
    `
    query($page: Int,$id: Int)  {
      Page(perPage: 10, page: $page ){
        mediaList(userId: $id, type: MANGA) {
          media {
            title {
              romaji
            }
            coverImage{
              extraLarge
              large
              medium
            }
            bannerImage
            id
            relations{
              nodes{
                format
                bannerImage
              }
            }
          }
        }
        pageInfo{
          total
          lastPage
          hasNextPage
        }
      }
    }
    
    
    `,
    {
      id: userId,
      page,
    },
    {
      Authorization: `Bearer ${alToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
  return response.Page.mediaList.map((entry) => entry.media);
  // .map((manga) => {
  //   if (manga.bannerImage === null) {
  //     const relation = manga.relations.nodes.find(
  //       (node) => node.bannerImage !== null && node.format === 'TV'
  //     );
  //     if (relation) manga.bannerImage = relation.bannerImage;
  //   }
  //   return manga;
  // });
}
async function uploadList(data) {
  return axios.post('https://randomanga.net/api/lists/', data, {
    withCredentials: true,
  });
}
async function searchLists(query) {
  return axios.get(`/api/lists?${query}`);
}
async function getListCover(ids) {
  const manga = await request(
    'https://graphql.anilist.co/',
    `
    query ($ids: [Int]) { 
      Page(perPage: 10){
      media (id_in: $ids) { 
       id
        coverImage{
          extraLarge
          large
          medium
        }
        bannerImage
      }
    }
    }
    `,
    {
      ids,
    }
  );
  return manga.Page.media;
}
async function toggleListLike(id, flag) {
  return axios({
    method: flag ? 'delete' : 'post',
    url: `/api/lists/${id}/likes`,
    withCredentials: true,
  });
}

export {
  createRandomList,
  toggleListLike,
  getListCover,
  toggleLikeManga,
  searchLists,
  fetchTrending,
  fetchPopular,
  removeFromPlanning,
  getUserAlId,
  login,
  removeAlAuth,
  addToPlanning,
  alSearch,
  fetchSections,
  signup,
  authStatus,
  getProfile,
  getUserMangaList,
  getRandomListInfo,
  logout,
  getDailyManga,
  getAlIdentity,
  getTokens,
  uploadList,
};
