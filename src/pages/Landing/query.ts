import { getPath } from 'API';
import { useQuery } from 'react-query';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetchUsers = async (): Promise<any> => {
  const url = getPath('users');
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
};

export const useGetUsers = () => {
  return useQuery<User[], Error>('users', fetchUsers);
};
