import { useContext } from 'react';
import useSWR from 'swr';
import { AuthContext } from '../../context/AuthContext';
import { fetch } from '../helpers';

export default function useDaily() {
    const { user } = useContext(AuthContext);
    const { data, error, mutate } = useSWR(
        'http://192.168.1.242:5000/api/manga/daily',
        fetch,
        {
            onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
                if (error.status === 404) return;
                if (retryCount >= 5) return;
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
        error: error,
        mutate: mutate,
    };
}
