const baseUrl: string = (import.meta.env.VITE_BASE_URL || '').toString();

export type PathName = 'users' | 'posts';

const paths: Record<PathName, string> = {
  users: 'users',
  posts: 'posts',
};

export function getPath(path: PathName) {
  return new URL(paths[path], baseUrl).href;
}
