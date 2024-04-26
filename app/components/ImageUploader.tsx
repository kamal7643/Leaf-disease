"use client";
import React, { useState } from 'react';
import { Button, Box, Typography, Select, MenuItem } from '@mui/material';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface ImageUploaderProps {
  file: File | null;
  setFile: (file: File | null) => void;
  model: String | null;
  setModel: (model: String | null) => void;
  handlePost: (image: any, model: any) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ file, setFile, model, setModel, handlePost }) => {

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Here, you can implement the logic to upload the selected file to a server or perform any other desired action.
    console.log('Uploading file:', file);
  };

  return (
    <Box className="flex flex-col items-center justify-center">
      <Typography variant="h6" className="mb-4">
        Upload an Image
      </Typography>
      <Box
        className="flex items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded-md cursor-pointer"
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <FaCloudUploadAlt className="text-gray-500 text-2xl" />
        <Typography variant="body1" className="ml-2 text-gray-500">
          Click to upload or drag and drop an image
        </Typography>
      </Box>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {file && (
        <Typography variant="body1" className="mt-4">
          Selected file: {file.name}
        </Typography>
      )}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={model}
        label="Model"
        className="mt-4"
        onChange={(e)=>setModel(e.target.value)}
      >
        <MenuItem value={10}>Model 1</MenuItem>
        <MenuItem value={20}>Model 2</MenuItem>
        <MenuItem value={30}>Model 3</MenuItem>
      </Select>

      <Button
        variant="contained"
        color="primary"
        className="mt-4"
        disabled={!file}
        onClick={()=>{if(model!==null)handlePost(file, model)}}
      >
        Predict
      </Button>
    </Box>
  );
};

export default ImageUploader;