import { useSWRInfinite } from 'swr';
import { request } from 'graphql-request';
import axios from 'axios';
import useUser from './useUser';

const fetcher = async (url, hideOnList) => {
  const alToken = localStorage.getItem('alToken');
  const { data } = await axios.get(url, { withCredentials: true });
  const headers = {
    ...(alToken ? { Authorization: `Bearer ${alToken}` } : {}),
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const list = await request(
    'https://graphql.anilist.co',
    `
    query ($ids: [Int], $onList: Boolean) { 
      Page(perPage: 50){
      media (id_in: $ids, onList: $onList) { 
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
    `,
    {
      ids: data.list,
      ...(hideOnList ? { onList: !hideOnList } : {}),
    },
    headers
  );
  return list.Page.media;
};
function useRandomList(id, hideOnList) {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return [`/api/random-lists/${id}/${Number(pageIndex) + 1}`];
  };
  const { data, size, setSize, mutate, isValidating, error } = useSWRInfinite(
    getKey,
    (url) => fetcher(url, hideOnList)
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
