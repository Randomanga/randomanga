import useSWR from 'swr';
import { getDailyManga } from '../../adapters/api';

export default function useDaily() {
  const { data, error, mutate, isValidating } = useSWR(
    'http://192.168.178.63:5000/api/manga/daily',
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
