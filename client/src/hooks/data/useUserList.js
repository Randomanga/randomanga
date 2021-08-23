import { useEffect, useState } from 'react';
import { useSWRInfinite } from 'swr';
import { getUserMangaList } from '../../adapters/api';
import { BASE_URL } from '../../config';
import useUser from './useUser';


export function useUserList() {
  const { user } = useUser();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [previousPage, setPreviousPage] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (!user || user.alID === null || page === previousPage) return;
    getUserMangaList(user.alID, page)
      .then((response) => {
        setData([...data, ...response]);
        setPreviousPage(page);
      })
      .catch((error) => {
        setError(error);
      });
  }, [page, user]);

  return {
    list: data,
    setPage,
    page,
    isLoadingInitialData: !data && !error,
    isLoadingMore:
      (!data && !error) ||
      (page > 0 && data && typeof data[page - 1] === 'undefined'),
  };
}
