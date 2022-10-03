import useSWR from 'swr';

const baseUrl = 'http://localhost:3000/api';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function useFetch(endpoint) {
  const url = baseUrl + endpoint;
  console.log(`connecting to ${url}`);

  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error
  };
}
