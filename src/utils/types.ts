export interface IProject {
  id: number;
  name: string;
  description: string;
  photo: string;
  alt: string;
  frontendRepoUrl?: string;
  backendRepoUrl?: string;
  liveUrl?: string;
  tech: string[];
}
