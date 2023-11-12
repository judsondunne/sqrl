import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from "./collection/collection";
import Login from "./login/login";
import Upload from "./upload/upload";
import AddScan from "./addscan";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/upload" element={<Upload/>} />
          <Route path="/jew" element={<AddScan/>} />
          {/* Redirect to /collection as the default route */}
          <Route path="/" element={<Collection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
