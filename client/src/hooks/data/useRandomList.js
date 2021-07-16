import { useSWRInfinite } from 'swr';
import { request, ggl } from 'graphql-request';
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
  }
}
}
`;

const fetcher = async (url) => {
  const { data } = await axios.get(url, { withCredentials: true });
  const list = await request('https://graphql.anilist.co', query, {
    ids: data.list,
  });
  return list.Page.media;
};

function useRandomList(id) {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return [
      `http://192.168.188.20:5000/api/random-lists/${id}/${
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
