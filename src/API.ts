const baseUrl: string = (import.meta.env.VITE_BASE_URL || '').toString();

type PathName = 'users';
const paths: Record<PathName, string> = {
  users: 'users',
};

export function getPath(path: PathName) {
  return new URL(paths[path], baseUrl).href;
}
