import useSWR from 'swr';
import { fetcher } from '../helpers';

export default function useDaily() {
    const { data, error } = useSWR('http://localhost:5000/api/manga/daily', fetcher);
    return {
        data,
        isLoading: !error && !data,
        isError: error,
    };
}
