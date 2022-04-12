const baseUrl: string = (import.meta.env.VITE_BASE_URL || '').toString();

export type IPath = 'TrackSearch';

export default function getPath(path: IPath) {
  return new URL(path, baseUrl).href;
}
