// collection.jsx

import React, { useState, useEffect } from 'react';
import './collection.css';
import { getDatabase, ref, onValue } from 'firebase/database';  // Import relevant functions from the Realtime Database
import { firestore, storage } from '../firebaseConfig'; // Import firestore and storage

function Collection() {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    const scansRef = ref(getDatabase(), '1/scans');

    const fetchScans = onValue(scansRef, (snapshot) => {
      const scansData = snapshot.val();

      if (scansData) {
        const scansArray = Object.entries(scansData).map(([key, value]) => ({
          id: key,
          ...value,
        }));

        setScans(scansArray);
      }
    });

    // Cleanup function to unsubscribe from the Firebase listener
    return () => fetchScans();
  }, []);

  // The rest of your code...



  return (
    <div>
      <div className="top">
        Hello, {scans.length > 0 ? scans[0].name : 'Unknown'}. Here are your scans:
      </div>
      <div className="scans">
        {scans.map((scan) => (
          <div key={scan.id} className="scan-item">
            <h3>{scan.name}</h3>
            <img src={scan.url} alt={scan.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
