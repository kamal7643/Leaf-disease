"use client";
import Image from "next/image";
import landingImage from "./assets/Landing.jpeg"
import ImageUploader from "./components/ImageUploader";
import Model from "./components/Model";
import React, {useState} from 'react';

export default function Home() {

  const [file, setFile] = useState<File | null>(null);
  
  return (
   <div className="min-h-screen">
    <div className="w-full flex justify-center p-4 ">
    <Image src = {landingImage.src} alt="Leaf" width={800} height={100}/>
    </div>

    <div>
      <ImageUploader file={file} setFile={setFile} /> 
    </div>

    <div className="w-full flex justify-around mt-16">
      <Model name="Model 1" file ={file} />
      <Model name="Model 2" file ={file} />
      <Model name="Model 3" file ={file} />
    </div>
    
   </div>

  );
}
