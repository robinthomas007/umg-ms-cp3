import { Order } from 'globalComponents/DataTable/DataHead';
import { atom } from 'jotai';

import { ItemsPerPage, SearchTrackRequest, Track } from './query';

export const searchAtom = atom<string>('');

export const IsCreateOrEditModalOpenAtom = atom<boolean>(false);

export const ItemsPerPageOptions: ItemsPerPage[] = ['10', '25', '50'];

export const itemsPerPageAtom = atom<ItemsPerPage>('10');

export const defaultSearchTrack: SearchTrackRequest = {
  itemsPerPage: '10',
  pageNumber: '1',
};

export const pageNumberAtom = atom<string>('1');

export const sortByAtom = atom<keyof Track>('releaseDate');

export const sortOrderAtom = atom<Order>('desc');
