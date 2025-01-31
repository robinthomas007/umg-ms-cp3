import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAtom } from 'jotai';
import { ItemsPerPage } from 'pages/Landing/query';
import { ItemsPerPageOptions } from 'pages/Landing/state';
import {
  IsCreateOrEditModalOpenAtom,
  itemsPerPageAtom,
  pageNumberAtom,
} from 'pages/Landing/state';
import React, { memo } from 'react';

interface Props {
  totalItems?: string;
  totalPages?: string;
}

function TableTools({ totalItems, totalPages }: Props) {
  const [, openCreateProject] = useAtom(IsCreateOrEditModalOpenAtom);
  const [itemsPerPage, setItemsPerPage] = useAtom(itemsPerPageAtom);
  const [pageNumber, setPageNumber] = useAtom(pageNumberAtom);

  const handleItemsPerPageChange = (event: SelectChangeEvent) => {
    setItemsPerPage(event.target.value as ItemsPerPage);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(String(value));
  };

  return (
    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        Viewing&nbsp;&nbsp;
        <Select
          autoWidth
          size="small"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          {ItemsPerPageOptions.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        &nbsp;&nbsp;of&nbsp;&nbsp;{totalItems || '.....'}
        &nbsp;&nbsp;Results
      </Typography>
      <Pagination
        count={Number(totalPages) || 0}
        boundaryCount={0}
        shape="rounded"
        page={Number(pageNumber)}
        onChange={handlePageChange}
      />
      <Stack spacing={1} direction="row">
        <Button
          sx={{
            color: 'dark',
            bgcolor: 'second',
            width: '88px',
            '&:hover': {
              color: 'dark',
              bgcolor: 'second',
            },
          }}
          startIcon={<AddCircleIcon />}
          onClick={() => openCreateProject(true)}
        >
          Create
        </Button>
        <Button
          sx={{
            color: 'dark',
            bgcolor: 'second',
            width: '88px',
            '&:hover': {
              color: 'dark',
              bgcolor: 'second',
            },
          }}
          startIcon={<FileDownloadIcon />}
        >
          Export
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default memo(TableTools);
