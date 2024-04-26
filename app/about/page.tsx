"use client";
import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs-node';
import * as fs from 'fs';

const ImageClassifier: React.FC = () => {
  const [modelOutput, setModelOutput] = useState<number[] | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadLayersModel(
          'https://firebasestorage.googleapis.com/v0/b/aplhasecond.appspot.com/o/model.json?alt=media&token=04736c4a-bfbb-40b9-bc73-1368c9185f67'
        );
        console.log(model.inputs[0].shape);

        const preprocessImage = async (imagePath: string) => {
          // Read the image file
          const imageBuffer = fs.readFileSync(imagePath);
          // Decode the image data
          const tensorBuffer = tf.node.decodeImage(imageBuffer);
          // Resize the image to 224x224
          const resizedTensor = tf.image.resizeBilinear(tensorBuffer, [224, 224]);
          // Normalize the pixel values to [0, 1]
          const normalizedTensor = resizedTensor.div(255.0);
          // Add an extra dimension for the batch size (null)
          const batchedTensor = normalizedTensor.expandDims(0);
          return batchedTensor;
        };

        const input = await preprocessImage('/Users/kamal/Documents/leaf-disease/sbf_63.jpg');
        console.log(input.shape);
        const output = model.predict(input);
        setModelOutput(output.dataSync());
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  return (
    <div>
      <h1>Image Classifier</h1>
      {modelOutput && <p>Model Output: {modelOutput.join(', ')}</p>}
    </div>
  );
};

export default ImageClassifier;