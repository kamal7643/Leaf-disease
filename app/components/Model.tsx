"use client";
import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

interface ModelProps {
    name: String| null;
    file: File | null;
  }

const Model: React.FC<ModelProps> = ({name, file}) => {
  const [showContainer, setShowContainer] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleButtonClick = () => {
    setShowContainer(!showContainer);
    // Here, you can implement the logic to fetch and display the results
    // For demonstration purposes, we'll add some dummy results
    setResults(['Result 1', 'Result 2', 'Result 3']);
  };

  return (
    <Box className="flex flex-col items-center justify-center">
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        disabled= {!file}
      >
        {name}
      </Button>
        <Box className="mt-4 p-4 border border-gray-300 rounded-md">
          <Typography variant="h6" className="mb-2">
            Results
          </Typography>
          {results.length > 0 ? (
            <ul>
              {results.map((result, index) => (
                <li key={index} className="text-gray-700">
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="body1" className="text-gray-500">
              No results found.
            </Typography>
          )}
        </Box>
    </Box>
  );
};

export default Model;