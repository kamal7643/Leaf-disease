// import * as tf from '@tensorflow/tfjs-node';
// import * as fs from 'fs';
// import * as path from 'path';

// export async function loadModel(modelPath: string): Promise<tf.InferenceModel> {
//   const modelJSON = JSON.parse(fs.readFileSync(path.join(modelPath, 'model.json'), 'utf-8'));
//   const weightsPath = path.join(modelPath, 'group1-shard1of1.bin');

//   const model = await tf.loadLayersModel('file://' + modelPath + '/model.json');
//   const weightsData = fs.readFileSync(weightsPath);
//   const weights = await tf.loadWeights(weightsData);
//   model.setWeights(weights);

//   return model;
// }

// export async function getOutput(model: tf.InferenceModel, input: tf.Tensor): Promise<tf.Tensor> {
//   const output = model.predict(input);
//   return output;
// }