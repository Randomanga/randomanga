import { useEffect, useState } from 'react';
import {
  fetchPopular,
  fetchTrending,
  getUserMangaList,
} from '../../adapters/api';

export function usePopular() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchPopular(page)
      .then((response) => {
        setData([...data, ...response.Page.media]);
      })
      .catch((error) => {
        setError(error);
      });
  }, [page]);

  return {
    data,
    setPage,
    page,
    isLoadingInitialData: !data && !error,
    isLoadingMore:
      (!data && !error) ||
      (page > 0 && data && typeof data[page - 1] === 'undefined'),
  };
}
