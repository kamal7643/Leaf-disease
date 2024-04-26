"use client";
import Image from "next/image";
import landingImage from "./assets/Landing.jpeg"
import ImageUploader from "./components/ImageUploader";
import React, { useState, useEffect } from 'react';

export default function Home() {

	const [file, setFile] = useState<File | null>(null);
	const [model, setModel] = useState<String | null>(null);
	const [dlModel, setDlModel] = useState(null);

	const [response, setResponse] = useState<any>(null);

	const handlePost = (image: any, model: any) => {
		if (file && model) {
			const reader = new FileReader();
			reader.readAsDataURL(file);

			console.log(reader);


			reader.onload = async() => {
				const base64Image = reader?.result?.split(',')[1]; // Extract base64-encoded image data
			  
				// Construct the request body as a JSON object
				const requestBody = {
				  image: base64Image, // Base64-encoded image data
				  model: model, // Example: model name
				};
				// const tensor = await preprocessImage(base64Image);
      			// const tensorData = tensor.dataSync();
			  
				// Send the POST request with the JSON body
				fetch('http://kamal7643.pythonanywhere.com/predict', {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(requestBody),
				})
				  .then(response => {
					if (response.ok) {
					  return response.json();
					} else {
					  throw new Error('Failed to upload image');
					}
				  })
				  .then(data => {
					console.log('Upload response:', data);
					// Handle response data here
				  })
				  .catch(error => {
					console.error('Error uploading image:', error);
				  });
			  };
		}
		else{
			console.log(null);
		}


	}

	

	return (
		<div className="min-h-screen">
			<div className="w-full flex justify-center p-4 ">
				<Image src={landingImage.src} alt="Leaf" width={800} height={100} />
			</div>

			<div>
				<ImageUploader file={file} setFile={setFile} model={model} setModel={setModel} handlePost={handlePost} />
			</div>


		</div>

	);
}
