import FilterListIcon from '@mui/icons-material/FilterList';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';

export default function Filters() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Badge
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        badgeContent={4}
        color="primary"
      >
        <Tooltip title="Filter Projects">
          <Fab size="medium" color="primary" onClick={handleClick}>
            <FilterListIcon />
          </Fab>
        </Tooltip>
      </Badge>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <p>The content of the Popover.</p>
      </Popover>
    </div>
  );
}
