import useSWR from 'swr';
import axios from 'axios';
const fetch = url =>
  axios.get(url, { withCredentials: true }).then(res => res.data);
export default function useUser() {
  const { data, error, mutate, isValidating } = useSWR(
    'http://192.168.1.242:5000/api/auth/status',
    fetch,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.response.status === 401) return;

        if (key === 'http://192.168.1.242:5000/api/auth/status') return;

        if (retryCount >= 2) return;

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
