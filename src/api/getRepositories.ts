import { useQuery } from "react-query";

export interface UserItem {
  username: string;
  url: string;
  avatar: string;
}
export interface GetRepositoriesResponseItem {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: UserItem[]
}

export type GetRepositoriesResponse = GetRepositoriesResponseItem[]
export interface GetRepositoriesParams {
  lang?: string | null;
  spokenLang?: string | null;
  since?: string | null;
}

export const getRepositories = async (params?: GetRepositoriesParams): Promise<GetRepositoriesResponse | undefined> => {
  let baseUrl = process.env.REACT_APP_API_URL + '/repositories';
  let url = baseUrl;
  let urlParams = new URLSearchParams();
  if (params?.since) urlParams.set('since', params.since);
  if (params?.spokenLang) urlParams.set('spoken_lang', params.spokenLang);
  if (params?.lang) url += `/${params.lang}`;
  if (urlParams.toString()) url += `?${urlParams}`;
  
  const data = await fetch(url);

  return data.json();
}

export const useRepositories = (params?: GetRepositoriesParams) => {
  return useQuery(['repositories', params], () => getRepositories(params));
}
