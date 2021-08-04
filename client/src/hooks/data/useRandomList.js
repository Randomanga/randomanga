import { useSWRInfinite } from 'swr';
import { request } from 'graphql-request';
import axios from 'axios';
import useUser from './useUser';
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
  const headers = {
    ...(alToken ? { Authorization: `Bearer ${alToken}` } : {}),
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const list = await request(
    'https://graphql.anilist.co',
    query,
    {
      ids: data.list,
    },
    headers
  );
  return list.Page.media;
};
function useRandomList(id) {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return [
      `http://192.168.178.63:5000/api/random-lists/${id}/${
        Number(pageIndex) + 1
      }`,
    ];
  };
  const { data, size, setSize, mutate, isValidating, error } = useSWRInfinite(
    getKey,
    fetcher
  );

  return {
    data,
    page: size,
    setPage: setSize,
    mutate: mutate,
    isLoading: !error && !data,
    isValidating: isValidating,
  };
}

export default useRandomList;
