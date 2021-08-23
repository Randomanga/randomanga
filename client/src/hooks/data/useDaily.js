import useSWR from 'swr';
import { getDailyManga } from '../../adapters/api';
import { BASE_URL } from '../../config';
export default function useDaily() {
  const { data, error, mutate, isValidating } = useSWR(
    BASE_URL + '/api/manga/daily',
    getDailyManga
  );
  return {
    manga: data?.manga,
    isLoading: !error && !data,
    error: error,
    mutate: mutate,
    isValidating,
  };
}
