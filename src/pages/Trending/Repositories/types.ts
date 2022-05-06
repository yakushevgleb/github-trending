import { GetRepositoriesResponse, GetRepositoriesResponseItem } from "api";

export interface ListProps {
  data?: GetRepositoriesResponse
}

export interface ListItemProps {
  data: GetRepositoriesResponseItem
}
