import useSWR from 'swr';

export default function useUser() {
  const { data, error, mutate, isValidating } = useSWR('api/auth/status', {
    revalidateOnFocus: true,
    revalidateOnMount: false,
  });
  return {
    user: data,
    isLoading: !error && !data,
    error: error,
    mutate: mutate,
    isValidating,
  };
}
