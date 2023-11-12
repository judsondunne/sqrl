import React, { useState, useEffect } from 'react';
import './collection.css';
import { getDatabase, ref, onValue } from 'firebase/database';  // Import relevant functions from the Realtime Database

function Collection() {
  const [scans, setScans] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    // Fetch user's name
    const userNameRef = ref(getDatabase(), `users/${userId}/name`);
    onValue(userNameRef, (snapshot) => {
      const name = snapshot.val();
      setUserName(name);
    });

    // Fetch scans
    const scansRef = ref(getDatabase(), `users/${userId}/scans`);
    const fetchScans = onValue(scansRef, (snapshot) => {
      const scansData = snapshot.val();

      if (scansData) {
        const scansArray = Object.entries(scansData).map(([key, value]) => ({
          id: key,
          ...value,
        }));

        setScans(scansArray);
      } else {
        setScans([]);
      }
    });

    return () => fetchScans();
  }, []);

  return (
    <div className="maini">
      <h2>Hello, {userName}</h2> {/* Display user's name */}
      <div className="scans">
        {scans.length > 0 ? (
          scans.map((scan) => (
            <div key={scan.id} className="scan-item">
              <h3>{scan.name}</h3>
              <img src={scan.url} alt={scan.name} className="scan-image" />
            </div>
          ))
        ) : (
          <p>No scans, please upload a photo.</p>
        )}
      </div>
    </div>
  );
}

export default Collection;
