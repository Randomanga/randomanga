import useSWR from 'swr';
import { request } from 'graphql-request';
import axios from 'axios';
const query = `
query ($ids: [Int]) { 
  Page(perPage: 50){
  media (id_in: $ids) { 
    id
    title {
      romaji
    }
    description
    coverImage{
      large
      medium
    }
    genres
    tags{
      name
    }
    mediaListEntry{
      id
status
    }
  }
}
}
`;

const fetcher = async (url) => {
  const alToken = localStorage.getItem('alToken');
  const { data } = await axios.get(url, { withCredentials: true });
  const mangas = await request(
    'https://graphql.anilist.co',
    query,
    { ids: data.list },
    {
      ...(alToken ? { Authorization: `Bearer ${alToken}` } : {}),
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  );
  return {
    ...data,
    list: mangas.Page.media,
  };
};
function useList(id) {
  const { data, mutate, isValidating, error } = useSWR(
    `http://192.168.178.63:5000/api/lists/${id}/`,
    fetcher
  );

  return {
    data,
    mutate: mutate,
    isLoading: !error && !data,
    isValidating: isValidating,
    error,
  };
}

export default useList;
