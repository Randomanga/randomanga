import useSWR from 'swr'
import useSwr from 'swr'
import { fetcher } from '../helpers'

function useDaily() {
    const { data, error } = useSWR('/api/daily', fetcher);
    return {
        manga: data,
        isLoading: !error && !data,
        isError: error
    }
}