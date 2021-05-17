import useSWR from 'swr';
import axios from 'axios';
const fetch = url =>
  axios.get(url, { withCredentials: true }).then(res => res.data);
export default function useUser() {
  const { data, error, mutate, isValidating } = useSWR(
    'http://192.168.1.242:5000/api/auth/status',
    fetch
  );
  return {
    user: data,
    isLoading: !error && !data,
    error: error,
    mutate: mutate,
    isValidating,
  };
}
