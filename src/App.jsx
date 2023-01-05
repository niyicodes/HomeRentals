import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";



function App() {
 return (
  <div className="App">
   <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/tenants" element={<Renters />} />
    <Route path="/landlord" element={<Owners />} />
    <Route path="/contactus" element={<ContactUs />} /> */}
   </Routes>
  </div>
 );
}

export default App;
