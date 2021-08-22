import useSWR from 'swr';
import axios from 'axios';
import { getUserAlId } from '../../adapters/api';
const fetch = async (url) => {
  const { data } = await axios.get(url, { withCredentials: true });
  const {
    data: { alToken },
  } = await axios.get('https://randomanga.net/api/users/token', {
    withCredentials: true,
  });
  if (alToken) {
    localStorage.setItem('alToken', alToken);
    const alID = await getUserAlId();
    return { ...data, alToken, alID };
  }
  return { ...data, alToken };
};
export default function useUser() {
  const { data, error, mutate, isValidating } = useSWR(
    'https://randomanga.net/api/auth/status',
    fetch,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.response.status === 401) {
          localStorage.removeItem('alToken');
          mutate(null);
          return;
        }

        if (key === 'https://randomanga.net/api/auth/status') return;

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
