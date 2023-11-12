import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from "./collection/collection";
import Login from "./login/login";
import Upload from "./upload/upload";
import AddScan from "./addscan";
import Collection_page from "./collection_page/collection_page";

import Signup from "./signup/signup";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/upload" element={<Upload/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          {/* Redirect to /collection as the default route */}
          <Route path="/" element={<Collection_page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
