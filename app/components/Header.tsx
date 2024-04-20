
'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { HiMenuAlt3 } from 'react-icons/hi';
import Link from 'next/link';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" className="bg-indigo-600">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-white">
          <Link href="/">Leaf Disease Detector</Link>
        </Typography>
        {isMobile ? (
          <div className="text-white">
            <HiMenuAlt3 size={24} />
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link href="/" legacyBehavior>
              <Typography variant="body1" className="text-white hover:text-indigo-300 cursor-pointer">
                Home
              </Typography>
            </Link>
            <Link href="/about" legacyBehavior>
              <Typography variant="body1" className="text-white hover:text-indigo-300 cursor-pointer">
                About
              </Typography>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;