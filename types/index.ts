export interface ProjectFilter {
  name: string;
  isActive: boolean;
}

export interface IRepositoriesAPIResponse {
  items: RepoItem[];
}

export interface RepoItem {
  name: string;
  openGraphImageUrl: string;
  collaborators: {
    totalCount: number;
  };
  description: null | string;
  url: string;
  createdAt: string;
  updatedAt: string;
  stargazerCount: number;
  languages: Languages;
  contributors: Contributors;
}

export interface Contributors {
  edges: ContributorsEdge[];
}

export interface ContributorsEdge {
  node: PurpleNode;
}

export interface PurpleNode {
  avatarUrl: string;
  login: string;
}

export interface Languages {
  edges: LanguagesEdge[];
}

export interface LanguagesEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  name: string;
}

export interface IGithubProjectsMaakafResponse {
  githubLink: string;
  discordLink: string;
}

export interface CachedProjects {
  items: IRepositoriesAPIResponse;
  cacheTimestamp: string;
}

export interface MembersListProps {
  members: Array<{
    id: number;
    imgUrl: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    joinDate: string;
    isAdmin: boolean;
  }>;
}

export interface MemberCardProps {
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
  isAdmin: boolean;
}

export type Member = {
  id: number;
  imgUrl: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  joinDate: string;
  isAdmin: boolean;
};
