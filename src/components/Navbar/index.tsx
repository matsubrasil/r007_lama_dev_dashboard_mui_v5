import React, { useState } from 'react';
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  Mail,
  Notifications,
  Cancel,
} from '@mui/icons-material';

export const Navbar = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant='h6' sx={{ whiteSpace: 'nowrap' }}>
          {smDown ? 'LAMA' : 'Lama Dev'}
        </Typography>

        <Box
          sx={{
            display: smDown ? (open ? 'flex' : 'none') : 'flex',
            alignItems: 'center',
            gap: 1,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            width: { sx: '70%', sm: '60%', md: '60%' },
            padding: '4px 10px',
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <SearchIcon />
          <InputBase
            placeholder='Search...'
            sx={{ color: 'white', marginLeft: theme.spacing(1), width: '100%' }}
          />
          <Cancel
            onClick={() => setOpen(false)}
            sx={{ display: smDown ? (open ? 'block' : 'none') : 'none' }}
          />
        </Box>

        <Box
          sx={{
            display: smDown ? (open ? 'none' : 'flex') : 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {!!smDown && <SearchIcon onClick={() => setOpen(true)} />}

          <Badge badgeContent={4} color='secondary'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>

          <Avatar
            alt='Remy Sharp'
            src='https://mui.com/static/images/avatar/1.jpg'
            sx={{ width: 32, height: 32, marginLeft: theme.spacing(2) }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
