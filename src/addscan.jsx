import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';  // Import relevant functions from the Realtime Database

function AddScan() {
  const [scanName, setScanName] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleAddScan = () => {
    const db = getDatabase();
    const scansRef = ref(db, '1/scans');

    // Create a new scan object
    const newScan = {
      name: "name",
      url: fileUrl,
    };

    // Push the new scan to the database
    push(scansRef, newScan).then(() => {
      // Reset the form or handle success
      setScanName('');
      setFileUrl('');
      console.log('Scan added successfully!');
    }).catch((error) => {
      // Handle any errors
      console.error('Error adding scan:', error);
    });
  };

  return (
    <div>
      
      <input
        type="text"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
        placeholder="Enter file URL"
      />
      <button onClick={handleAddScan}>Add Scan</button>
    </div>
  );
}

export default AddScan;
