import { useEffect, useState } from 'react';
import { fetchTrending, getUserMangaList } from '../../adapters/api';

export function useTrending() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchTrending(page)
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
