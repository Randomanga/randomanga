import useSWR from 'swr';
import { fetcher } from '../helpers';

export default function useDaily() {
    const { data, error, mutate } = useSWR(
        'http://192.168.1.242:5000/api/manga/daily',
        fetcher,
        {
            onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
                if (error.status === 404) return;
                if (retryCount >= 10) return;
                setTimeout(
                    () => revalidate({ retryCount: retryCount + 1 }),
                    5000
                );
            },
            shouldRetryOnError: true,
        }
    );
    return {
        data,
        isLoading: !error && !data,
        isError: error,
        mutate: mutate,
    };
}
