import githubTrends from 'github-trends-api';
import { useQuery } from 'react-query';

export const useTrends = (params) => {
  return useQuery('trends', () => githubTrends(params));
}
