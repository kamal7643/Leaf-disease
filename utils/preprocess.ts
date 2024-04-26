import * as tf from '@tensorflow/tfjs';

export const preprocessImage = async (imageData: string) => {
  // Decode the base64 string to a binary buffer
  const binaryBuffer = tf.util.encodeString(imageData, 'base64').buffer;

  // Decode the binary buffer into a tensor
  const tensorBuffer = tf.browser.fromPixels(new Uint8Array(binaryBuffer));

  // Resize the image to 224x224
  const resizedTensor = tf.image.resizeBilinear(tensorBuffer, [224, 224]);

  // Normalize the pixel values to [0, 1]
  const normalizedTensor = resizedTensor.div(255.0);

  // Add an extra dimension for the batch size (null)
  const batchedTensor = normalizedTensor.expandDims(0);

  // Dispose of the intermediate tensors to free up memory
  tensorBuffer.dispose();
  resizedTensor.dispose();
  normalizedTensor.dispose();

  return batchedTensor;
};