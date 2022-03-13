interface IPaths {
  users: string;
}

const baseUrl = 'https://sonplaceholder.typicode.com/';

const paths: IPaths = {
  users: 'users',
};

export function getPath(path: keyof IPaths) {
  return new URL(paths[path], baseUrl).href;
}
