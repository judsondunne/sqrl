import React, { useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as databaseRef, push } from 'firebase/database';
import axios from 'axios'; // Import axios for the HTTP request
import './upload.css';
import OpenAI from 'openai';


const string1 = "sk-KXTXbsmqk3"
const string2 = "2EccYBfyDoT3BlbkFJ"
const string3 = "T2dpfjaTKQxxmizN10IR"
// const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: string1 + string2 + string3,
  dangerouslyAllowBrowser: true
});


async function sendMessageToChatGPT(url) {
  const name = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages:[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "What animal is in this image? Please say just the animal name and nothing else"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": url,
                    },
                },
            ],
        }
    ],
  });
  console.log(name.choices[0].message.content)
return (name.choices[0].message.content);
}








function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const fileRef = storageRef(storage, `Scans/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(fileRef, selectedFile);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      });

      try {
        await uploadTask;
        const url = await getDownloadURL(fileRef);
        setDownloadURL(url);
        
            const chatGPTResponse = await sendMessageToChatGPT(url);
            console.log('chat')
            console.log('ChatGPT Response:', chatGPTResponse);
        

        const db = getDatabase();
        const userId = localStorage.getItem('userId');
        const scansRef = databaseRef(db, `users/${userId}/scans`);


        
       
        const newScan = { name: chatGPTResponse, url: url };
        await push(scansRef, newScan);
        console.log('Scan added successfully!');

        // Call sendMessageToChatGPT after the file is uploaded
        

      } catch (error) {
        console.error('Error uploading file or adding scan:', error.message);
      }
    }
  };

  return (
    <div>
        <div className="header2">
      <h2>Photo Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress.toFixed(2)}%</p>}
      {downloadURL && <img src={downloadURL} alt="Uploaded" style={{ maxWidth: '100%' }} />}
    </div>
    </div>
  );
}

export default Upload;
