import useSWR from 'swr';

export default function useUser() {
  const { data, error, mutate } = useSWR('api/auth/status');
  return {
    user: data,
    isLoading: !error && !data,
    error: error,
    mutate: mutate,
  };
}
