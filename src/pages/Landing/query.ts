import getPath from 'API';
import axios from 'axios';
import { useMutation } from 'react-query';

export interface Track {
  trackId: number;
  title: number;
  label: string;
  artist: number;
  isrc?: string;
  releaseDate: Date;
  leakDate: Date;
  createdDate: Date;
}

interface LabelFacet {
  id: string;
  count: string;
  name: string;
}

export interface SearchTrackResponse {
  tracks: Track[];
  totalItems: string;
  totalPages: string;
  pageNumber: string;
  itemsPerPage: string;
  labelFacets: LabelFacet[];
}

interface Filter {
  labelIds?: string[];
  releaseFrom?: Date;
  releaseTo?: Date;
}

export type ItemsPerPage = '10' | '25' | '50';

export interface SearchTrackRequest {
  searchTerm?: string;
  itemsPerPage: ItemsPerPage;
  pageNumber: string;
  sortColumn?: string;
  sortOrder?: string;
  filter?: Filter;
}

export const useSearchTracks = () => {
  const url = getPath('TrackSearch');

  const searchTracks = async (
    search: SearchTrackRequest,
  ): Promise<SearchTrackResponse> => {
    const response = await axios.post(url, { searchCriteria: search });
    return response.data;
  };

  return useMutation(searchTracks);
};
