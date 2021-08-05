import useSWR from 'swr';
import axios from 'axios';
const fetch = async (url) => {
  const { data } = await axios.get(url, { withCredentials: true });
  const {
    data: { alToken },
  } = await axios.get('http://192.168.178.63:5000/api/users/token', {
    withCredentials: true,
  });
  localStorage.setItem('alToken', alToken);
  return {
    ...data,
    alToken,
  };
};
export default function useUser() {
  const { data, error, mutate, isValidating } = useSWR(
    'http://192.168.178.63:5000/api/auth/status',
    fetch,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.response.status === 401) {
          localStorage.removeItem('alToken');
          return;
        }

        if (key === 'http://192.168.178.63:5000/api/auth/status') return;

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
