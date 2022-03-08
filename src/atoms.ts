import { PaletteMode } from '@mui/material';
import { atom } from 'jotai';
import { getColorMode } from 'utils/theme';

export const colorModeAtom = atom<PaletteMode>(getColorMode());
