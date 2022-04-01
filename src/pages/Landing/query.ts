import type { PathName } from 'API';
import { getPath } from 'API';
import { useQuery } from 'react-query';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export type Post = {
  id: number;
  title: string;
};

const fetchAsync = async (path: PathName): Promise<any> => {
  const url = getPath(path);
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
};

export const useGetUsers = () => {
  return useQuery<User[], Error>('users', () => fetchAsync('users'));
};

export const useGetPosts = () => {
  return useQuery<Post[], Error>('posts', () => fetchAsync('posts'));
};
