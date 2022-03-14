const baseUrl = 'https://sonplaceholder.typicode.com/';

type PathName = 'users';
const paths: Record<PathName, string> = {
  users: 'users',
};

export function getPath(path: PathName) {
  return new URL(paths[path], baseUrl).href;
}
