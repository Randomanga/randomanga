import useSWR from 'swr';
import axios from 'axios';
const fetch = url =>
  axios.get(url, { withCredentials: true }).then(res => {
    console.log('FETCHING USER HOOK');
    return res.data;
  });
export default function useUser() {
  const { data, error, mutate, isValidating } = useSWR(
    'http://192.168.1.242:5000/api/auth/status',
    fetch,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        // Never retry on 404.
        if (error.response.status === 401) return;

        // Never retry for a specific key.
        if (key === 'http://192.168.1.242:5000/api/auth/status') return;

        // Only retry up to 10 times.
        if (retryCount >= 2) return;

        // Retry after 5 seconds.
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
      revalidateOnFocus: true,
      revalidateOnMount: true,
      revalidateOnReconnect: false,
      refreshWhenOffline: false,
      refreshWhenHidden: true,
      refreshInterval: 0,
    }
  );
  return {
    user: data,
    isLoading: !error && !data,
    error: error,
    mutate: mutate,
    isValidating,
  };
}
